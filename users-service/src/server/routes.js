import { addHours } from 'date-fns';

import { User, UserSession } from '#root/db/models';
import generateUUID from '#root/helpers/generateUUID';
import hashPassword from '#root/helpers/hashPassword';
import passwordCompareSync from '#root/helpers/passwordCompareSync';

const USER_SESSION_EXPIRATION_HOURS = 1;

const setupRoutes = (app) => {
  app.post('/sessions', async (req, res, next) => {
    if (!req.body.email || !req.body.password)
      return next(new Error('Invalid body.'));

    try {
      const user = await User.findOne({
        attributes: {},
        where: {
          email: req.body.email,
        },
      });
      console.log(user);

      if (!user) return next(new Error('Invalid email.'));

      if (!passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error('Incorrect password.'));
      }

      const expiresAt = addHours(new Date(), USER_SESSION_EXPIRATION_HOURS);
      const sessionTokens = generateUUID();

      const userSession = await UserSession.create({
        expiresAt,
        id: sessionTokens,
        userId: user.id,
      });

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.post('/users', async (req, res, next) => {
    if (!req.body.email || !req.body.password)
      return next(new Error('Invalid body.'));

    try {
      const newUser = await User.create({
        id: generateUUID(),
        email: req.body.email,
        passwordHash: hashPassword(req.body.password),
      });

      return res.json(newUser);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;

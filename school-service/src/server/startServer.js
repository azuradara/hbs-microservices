import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import getEnv from '#root/helpers/getEnv';

import setupRoutes from './routes';

const PORT = getEnv('PORT', 7100);

const app = express();

/** MIDDLEWARE */
app.use(bodyParser.json());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

/** ROUTES */

setupRoutes(app);

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  });
});

// idk if i need to do the 0.0.0.0 thing
app.listen(PORT, '0.0.0.0', () =>
  console.log(`School service listening on ${PORT}.`)
);

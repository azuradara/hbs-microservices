import { Professor } from '#root/db/models';

const professorRoutes = (app) => {
  app.get('/professors', async (req, res, next) => {
    const professors = await Professor.findAll();
    return res.json(professors);
  });

  app.get('/professors/:professorId/modules', async (req, res, next) => {
    const professor = await Professor.findByPk(req.params.professorId);
    if (!professor) return next(new Error('Invalid professor ID.'));

    res.json(await professor.getModules());
  });

  app.post('/professors', async (req, res, next) => {
    if (
      !req.body.fullName ||
      !req.body.cin ||
      !req.body.matricule ||
      !req.body.registrationDate
    )
      return next(new Error('Invalid Body'));

    try {
      const newProfessor = await Professor.create({
        fullName: req.body.fullName,
        cin: req.body.cin,
        matricule: req.body.matricule,
        registrationDate: req.body.registrationDate,
      });

      return res.json(newProfessor);
    } catch (e) {
      return next(e);
    }
  });

  app.put('/professors/:professorId', async (req, res, next) => {
    try {
      const professor = await Professor.findByPk(req.params.professorId);
      if (!professor) return next(new Error('Invalid professor ID.'));

      professor.update({ ...req.body });

      return res.json(professor);
    } catch (e) {
      return next(e);
    }
  });

  app.delete('/professors/:professorId', async (req, res, next) => {
    try {
      const professor = await Professor.findByPk(req.params.professorid);
      if (!professor) return next(new Error('Invalid professor ID.'));

      await professor.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });
};

export default professorRoutes;

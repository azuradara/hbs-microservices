import { Module, Professor, Junction, Student } from '#root/db/models';

const moduleRoutes = (app) => {
  app.get('/modules', async (req, res, next) => {
    const modules = await Module.findAll();
    return res.json(modules);
  });

  app.post('/modules', async (req, res, next) => {
    if (!req.body.moduleName || !req.body.coefficient)
      return next(new Error('Invalid Body'));

    if (req.body.professorId) {
      const professor = await Professor.findByPk(req.body.professorId);
      if (!professor) return next(new Error('Invalid professor ID.'));
    }

    try {
      const newModule = await Module.create({
        ...req.body,
      });

      return res.json(newModule);
    } catch (e) {
      return next(e);
    }
  });

  app.put('/modules/:moduleId', async (req, res, next) => {
    try {
      const module = await Module.findByPk(req.params.moduleId);
      if (!module) return next(new Error('Invalid module ID.'));

      if (req.body.professorId) {
        const professor = await Professor.findByPk(req.body.professorId);
        if (!professor) return next(new Error('Invalid professor ID.'));
      }

      module.update({ ...req.body });

      return res.json(module);
    } catch (e) {
      return next(e);
    }
  });

  app.delete('/modules/:moduleId', async (req, res, next) => {
    try {
      const module = await Professor.findByPk(req.params.moduleId);
      if (!module) return next(new Error('Invalid module ID.'));

      await module.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });

  /** JUNCTIONS */
  app.post('/modules/:moduleId/students/:studentId', async (req, res, next) => {
    try {
      const module = await Module.findByPk(req.params.moduleId);
      if (!module) return next(new Error('Invalid module ID.'));

      if (req.params.studentId) {
        const student = await Student.findByPk(req.params.studentId);
        if (!student) return next(new Error('Invalid student ID.'));
      }

      const junction = await Junction.create({
        moduleId: req.params.moduleId,
        studentId: req.params.studentId,
      });

      return res.json(junction);
    } catch (e) {
      return next(e);
    }
  });

  app.delete(
    '/modules/:moduleId/students/:studentId',
    async (req, res, next) => {
      try {
        const junction = await Junction.findOne({
          where: {
            moduleId: req.params.moduleId,
            studentId: req.params.studentId,
          },
        });

        if (!junction) return next(new Error('Invalid Module or Student ID.'));

        await junction.destroy();

        return res.end();
      } catch (e) {
        return next(e);
      }
    }
  );
};

export default moduleRoutes;

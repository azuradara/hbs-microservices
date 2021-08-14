import { Module, Professor, Junction, Student } from '#root/db/models';

const moduleRoutes = (app) => {
  app.get('/modules', async (req, res, next) => {
    const modules = await Module.findAll({ include: [Student] });
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
      const module = await Module.findByPk(req.params.moduleId);
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
      if (!req.params.studentId || !req.params.moduleId)
        return next(new Error('Invalid parameters.'));

      const module = await Module.findByPk(req.params.moduleId);
      if (!module) return next(new Error('Invalid module ID.'));

      const student = await Student.findByPk(req.params.studentId);
      if (!student) return next(new Error('Invalid student ID.'));

      const junction = await Junction.findOne({
        where: {
          studentId: req.params.studentId,
          moduleId: req.params.moduleId,
        },
      });
      if (junction)
        return next(new Error('Student already attends this module.'));

      module.addStudent(req.params.studentId);

      return res.json(true);
    } catch (e) {
      return next(e);
    }
  });

  app.delete(
    '/modules/:moduleId/students/:studentId',
    async (req, res, next) => {
      try {
        if (!req.params.studentId || !req.params.moduleId)
          return next(new Error('Invalid parameters.'));

        const junction = await Junction.findOne({
          where: {
            studentId: req.params.studentId,
            moduleId: req.params.moduleId,
          },
        });
        if (!junction) return next(new Error('Invalid module or student ID.'));

        await junction.destroy();

        return res.end();
      } catch (e) {
        return next(e);
      }
    }
  );
};

export default moduleRoutes;

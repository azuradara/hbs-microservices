import { Student, Module } from '#root/db/models';

const studentRoutes = (app) => {
  app.get('/students', async (req, res, next) => {
    const students = await Student.findAll();
    return res.json(students);
  });

  app.get('/students/:studentId/modules', async (req, res, next) => {
    const student = await Student.findByPk(req.params.studentId);
    if (!student) return next(new Error('Invalid student ID.'));

    res.json(await student.getModules());
  });

  app.post('/students', async (req, res, next) => {
    if (
      !req.body.fullName ||
      !req.body.cin ||
      !req.body.birthDate ||
      !req.body.registrationDate ||
      !req.body.branch
    )
      return next(new Error('Invalid Body'));

    try {
      const newStudent = await Student.create({
        fullName: req.body.fullName,
        cin: req.body.cin,
        birthDate: req.body.birthDate,
        registrationDate: req.body.registrationDate,
        branch: req.body.branch,
      });

      return res.json(newStudent);
    } catch (e) {
      return next(e);
    }
  });

  app.put('/students/:studentId', async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.studentId);
      if (!student) return next(new Error('Invalid student ID.'));

      student.update({ ...req.body });

      return res.json(student);
    } catch (e) {
      return next(e);
    }
  });

  app.delete('/students/:studentId', async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.studentId);
      if (!student) return next(new Error('Invalid student ID.'));

      await student.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });
};

export default studentRoutes;

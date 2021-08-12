import { Student } from '#root/db/models';

const setupRoutes = (app) => {
  app.get('/students', async (req, res, next) => {
    const students = await Student.findAll();
    return res.json(students);
  });
};

export default setupRoutes;

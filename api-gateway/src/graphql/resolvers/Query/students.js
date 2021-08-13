import SchoolService from '#root/adapters/SchoolService';

const studentsResolver = async (obj, _, context) => {
  if (!context.req.cookies.userSessionId) throw new Error('Unauthorized');
  return await SchoolService.fetchAllStudents();
};

export default studentsResolver;

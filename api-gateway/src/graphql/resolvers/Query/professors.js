import SchoolService from '#root/adapters/SchoolService';

const professorsResolver = async (obj, _, context) => {
  if (!context.req.cookies.userSessionId) throw new Error('Unauthorized');
  return await SchoolService.fetchAllProfessors();
};

export default professorsResolver;

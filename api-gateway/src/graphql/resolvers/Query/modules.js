import SchoolService from '#root/adapters/SchoolService';

const modulesResolver = async (obj, _, context) => {
  if (!context.req.cookies.userSessionId) throw new Error('Unauthorized');
  return await SchoolService.fetchAllModules();
};

export default modulesResolver;

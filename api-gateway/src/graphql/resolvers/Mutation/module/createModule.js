import SchoolService from '#root/adapters/SchoolService';

const createModuleResolver = async (obj, payload) => {
  return await SchoolService.createModule({
    ...payload,
  });
};

export default createModuleResolver;

import SchoolService from '#root/adapters/SchoolService';

const updateModuleResolver = async (obj, { moduleId }) => {
  return await SchoolService.deleteModule({ moduleId });
};

export default updateModuleResolver;

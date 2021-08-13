import SchoolService from '#root/adapters/SchoolService';

const updateModuleResolver = async (obj, payload) => {
  return await SchoolService.updateModule({
    ...payload,
  });
};

export default updateModuleResolver;

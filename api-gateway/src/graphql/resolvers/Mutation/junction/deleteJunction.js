import SchoolService from '#root/adapters/SchoolService';

const updateJunctionResolver = async (obj, { moduleId, studentId }) => {
  return await SchoolService.deleteJunction({ moduleId, studentId });
};

export default updateJunctionResolver;

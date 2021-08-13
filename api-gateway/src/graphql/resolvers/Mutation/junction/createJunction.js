import SchoolService from '#root/adapters/SchoolService';

const createJunctionResolver = async (obj, { moduleId, studentId }) => {
  return await SchoolService.createJunction({ moduleId, studentId });
};

export default createJunctionResolver;

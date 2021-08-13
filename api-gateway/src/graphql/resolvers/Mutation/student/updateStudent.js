import SchoolService from '#root/adapters/SchoolService';

const updateStudentResolver = async (obj, payload) => {
  return await SchoolService.updateStudent({
    ...payload,
  });
};

export default updateStudentResolver;

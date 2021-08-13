import SchoolService from '#root/adapters/SchoolService';

const updateStudentResolver = async (obj, { studentId }) => {
  return await SchoolService.deleteStudent({ studentId });
};

export default updateStudentResolver;

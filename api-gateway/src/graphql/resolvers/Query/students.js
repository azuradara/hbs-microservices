import SchoolService from '#root/adapters/SchoolService';

const studentsResolver = async () => {
  return await SchoolService.fetchAllStudents();
};

export default studentsResolver;

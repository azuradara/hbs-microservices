import SchoolService from '#root/adapters/SchoolService';

const createStudentResolver = async (
  obj,
  { fullName, cin, birthDate, registrationDate, branch }
) => {
  return await SchoolService.createStudent({
    fullName,
    cin,
    birthDate,
    registrationDate,
    branch,
  });
};

export default createStudentResolver;

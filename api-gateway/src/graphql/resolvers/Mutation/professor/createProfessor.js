import SchoolService from '#root/adapters/SchoolService';

const createProfessorResolver = async (
  obj,
  { fullName, cin, matricule, registrationDate }
) => {
  return await SchoolService.createProfessor({
    fullName,
    cin,
    matricule,
    registrationDate,
  });
};

export default createProfessorResolver;

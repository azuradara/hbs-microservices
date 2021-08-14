import SchoolService from '#root/adapters/SchoolService';

const createProfessorResolver = async (
  obj,
  { fullName, matricule, registrationDate }
) => {
  return await SchoolService.createProfessor({
    fullName,
    matricule,
    registrationDate,
  });
};

export default createProfessorResolver;

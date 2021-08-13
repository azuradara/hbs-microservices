import SchoolService from '#root/adapters/SchoolService';

const updateProfessorResolver = async (obj, { professorId }) => {
  return await SchoolService.deleteProfessor({ professorId });
};

export default updateProfessorResolver;

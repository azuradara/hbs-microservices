import SchoolService from '#root/adapters/SchoolService';

const Professor = {
  modules: async (professor) => {
    return await SchoolService.fetchModulesByProfessor({
      professorId: professor.id,
    });
  },
};

export default Professor;

import SchoolService from '#root/adapters/SchoolService';

const Student = {
  modules: async (student) => {
    return await SchoolService.fetchModulesByStudent({
      studentId: student.id,
    });
  },
};

export default Student;

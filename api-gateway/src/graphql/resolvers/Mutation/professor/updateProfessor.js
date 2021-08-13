import SchoolService from '#root/adapters/SchoolService';

const updateProfessorResolver = async (obj, payload) => {
  return await SchoolService.updateProfessor({
    ...payload,
  });
};

export default updateProfessorResolver;

const SET = 'student/SET';

const DEFAULT_STATE = [];

const studentReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.students;
  }
  return state;
};

export default studentReducer;

export const setStudents = (students) => ({
  students,
  type: SET,
});

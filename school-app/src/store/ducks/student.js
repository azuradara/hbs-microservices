const SET = 'student/SET';
const UPDATE = 'student/UPDATE';
const DELETE = 'student/DELETE';
const CREATE = 'student/CREATE';

const DEFAULT_STATE = [];

const studentReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.payload;

    case UPDATE:
      const studentIndexUpdate = state.findIndex(
        (p) => p.id == action.payload.id
      );
      return [
        ...state.slice(0, studentIndexUpdate),
        {
          ...action.payload,
        },
        ...state.slice(studentIndexUpdate + 1),
      ];

    case DELETE:
      const studentIndexDelete = state.findIndex((p) => p.id == action.payload);
      console.log(studentIndexDelete);
      return [
        ...state.slice(0, studentIndexDelete),
        ...state.slice(studentIndexDelete + 1),
      ];

    case CREATE:
      return [...state, { ...action.payload }];
  }
  return state;
};

export default studentReducer;

export const setStudents = (payload) => ({
  payload,
  type: SET,
});

export const updateStudent = (payload) => ({
  payload,
  type: UPDATE,
});

export const deleteStudent = (payload) => ({
  payload,
  type: DELETE,
});

export const createStudent = (payload) => ({
  payload,
  type: CREATE,
});

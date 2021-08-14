const SET = 'professor/SET';
const UPDATE = 'professor/UPDATE';
const DELETE = 'professor/DELETE';

const DEFAULT_STATE = [];

const professorReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.payload;

    case UPDATE:
      const professorIndexUpdate = state.findIndex(
        (p) => p.id == action.payload.id
      );
      return [
        ...state.slice(0, professorIndexUpdate),
        {
          ...action.payload,
        },
        ...state.slice(professorIndexUpdate + 1),
      ];

    case DELETE:
      const professorIndexDelete = state.findIndex(
        (p) => p.id == action.payload
      );
      console.log(professorIndexDelete);
      return [
        ...state.slice(0, professorIndexDelete),
        ...state.slice(professorIndexDelete + 1),
      ];
  }
  return state;
};

export default professorReducer;

export const setProfessors = (payload) => ({
  payload,
  type: SET,
});

export const updateProfessor = (payload) => ({
  payload,
  type: UPDATE,
});

export const deleteProfessor = (payload) => ({
  payload,
  type: DELETE,
});

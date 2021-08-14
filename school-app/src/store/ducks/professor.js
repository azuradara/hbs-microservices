const SET = 'professor/SET';

const DEFAULT_STATE = [];

const professorReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.professors;
  }
  return state;
};

export default professorReducer;

export const setProfessors = (professors) => ({
  professors,
  type: SET,
});

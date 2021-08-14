const SET = 'module/SET';

const DEFAULT_STATE = [];

const moduleReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.modules;
  }
  return state;
};

export default moduleReducer;

export const setModules = (modules) => ({
  modules,
  type: SET,
});

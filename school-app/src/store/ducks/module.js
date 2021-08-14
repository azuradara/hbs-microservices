const SET = 'module/SET';
const UPDATE = 'module/UPDATE';
const DELETE = 'module/DELETE';
const CREATE = 'module/CREATE';

const DEFAULT_STATE = [];

const moduleReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.payload;

    case UPDATE:
      const moduleIndexUpdate = state.findIndex(
        (p) => p.id == action.payload.id
      );
      return [
        ...state.slice(0, moduleIndexUpdate),
        {
          ...action.payload,
        },
        ...state.slice(moduleIndexUpdate + 1),
      ];

    case DELETE:
      const moduleIndexDelete = state.findIndex((p) => p.id == action.payload);
      console.log(moduleIndexDelete);
      return [
        ...state.slice(0, moduleIndexDelete),
        ...state.slice(moduleIndexDelete + 1),
      ];

    case CREATE:
      return [...state, { ...action.payload }];
  }
  return state;
};

export default moduleReducer;

export const setModules = (payload) => ({
  payload,
  type: SET,
});

export const updateModule = (payload) => ({
  payload,
  type: UPDATE,
});

export const deleteModule = (payload) => ({
  payload,
  type: DELETE,
});

export const createModule = (payload) => ({
  payload,
  type: CREATE,
});

const CLEAR = 'session/CLEAR';
const SET = 'session/SET';

const DEFAULT_STATE = null;

const sessionReducer = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case SET:
      return action.session;
    case CLEAR:
      return null;
  }
  return state;
};

export default sessionReducer;

export const setSession = (session) => ({ session, type: SET });

export const clearSession = () => ({ type: CLEAR });

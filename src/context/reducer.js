import { ACTIONS } from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      return { ...state, isAuthenticated: action.isAuthenticated };
    }
    case ACTIONS.LOGOUT: {
      return {};
    }
    default:
      return state;
  }
}

export default reducer;

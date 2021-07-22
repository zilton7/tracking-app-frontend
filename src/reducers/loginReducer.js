const initialState = {
  username: null,
  loggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        loggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        username: null,
        loggedIn: false,
      };
    default:
      return { ...state };
  }
};

export default loginReducer;

const login = (username) => async (dispatch) => {
  dispatch({
    type: 'LOGIN',
    payload: {
      username,
      loggedIn: true,
    },
  });
};
export default login;

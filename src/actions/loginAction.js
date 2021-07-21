const login = (username) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: {
      username: username,
      loggedIn: true,
    },
  });
};
export default login;

const logout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};
export default logout;

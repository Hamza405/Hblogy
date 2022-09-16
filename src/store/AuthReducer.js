export const initState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const AuthReducer = (state, action) => {
  if (action.type === "LOGIN_START") {
    return {
      user: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === "LOGIN_SUCCESS") {
    return {
      user: action.payload,
      loading: false,
      error: null,
    };
  }
  if (action.type === "LOGIN_FAILED") {
    return {
      user: null,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      user: null,
      loading: false,
      error: null,
    };
  }
  return initState;
};

export default AuthReducer;

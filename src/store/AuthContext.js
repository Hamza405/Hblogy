import { createContext, useEffect, useReducer } from "react";

const initState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuth: false,
  loading: false,
  error: null,
};

const AuthReducer = (state, action) => {
  if (action.type === "LOGIN_START") {
    return {
      user: null,
      isAuth: false,
      loading: true,
      error: null,
    };
  }
  if (action.type === "LOGIN_SUCCESS") {
    return {
      user: action.payload,
      isAuth: true,
      loading: false,
      error: null,
    };
  }
  if (action.type === "LOGIN_FAILED") {
    return {
      user: null,
      isAuth: false,
      loading: false,
      error: action.payload,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      user: null,
      isAuth: false,
      loading: false,
      error: null,
    };
  }
  return initState;
};

const AuthContext = createContext(initState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const context = {
    user: state.user,
    isAuth: state.isAuth,
    loading: state.loading,
    error: state.error,
    dispatch,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

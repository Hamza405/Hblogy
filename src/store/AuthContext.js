import { createContext, useEffect, useReducer } from "react";
import AuthReducer, { initState } from "./AuthReducer";

const AuthContext = createContext(initState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const context = {
    user: state.user,
    loading: state.loading,
    error: state.error,
    dispatch,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;

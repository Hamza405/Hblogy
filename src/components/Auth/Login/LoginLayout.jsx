import axios from "axios";
import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import style from "./LoginLayout.module.css";

const LoginLayout = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, loading, user, error: authError } = useContext(AuthContext);
  const [error, setError] = useState({});

  const submitHandler = async (event) => {
    event.preventDefault();
    setError({});
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      setError({ error: "Please enter your info!" });
      return;
    }
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post("http://localhost:5000/api/login", {
        userName: email,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err);
      setError({ error: "Some thing wrong!" });
      dispatch({ type: "LOGIN_FAILED", payload: err });
    }
    console.log(user);
    console.log(authError);
  };

  return (
    <div className={style.login}>
      <span className={style.title}>Login</span>
      <form className={style.form} onSubmit={submitHandler}>
        <label htmlFor="text">User Name</label>
        <input
          ref={emailRef}
          id="text"
          type="text"
          placeholder="Enter your user name"
        />
        <label htmlFor="email">Password</label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        {error && <span className={style.error}>{error.error}</span>}
        <button className={style.button} type="submit" disabled={loading}>
          Login
        </button>
      </form>
      <button className={style.SButton}>
        <Link className="link" to="/signup">
          Register Now
        </Link>
      </button>
    </div>
  );
};

export default LoginLayout;

import axios from "axios";
import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import style from "./SignUpLayout.module.css";

const SignUpLayout = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, loading, user, error: authError } = useContext(AuthContext);
  const [error, setError] = useState({});

  const submit = async (event) => {
    event.preventDefault();
    setError({});
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (
      userName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      setError({ error: "Please enter your info!" });
      return;
    }
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post("http://localhost:5000/api/register", {
        userName,
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err });
      setError({ error: "Some thing wrong!" });
    }
  };

  return (
    <div className={style.signUp}>
      <span className={style.title}>SignUp</span>
      <form className={style.form} onSubmit={submit}>
        <label htmlFor="userName">User Name</label>
        <input
          ref={userNameRef}
          id="userName"
          type="text"
          placeholder="Enter your User Name"
        />
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          placeholder="Enter your email"
        />
        <label htmlFor="email">Password</label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        {error && <span className={style.error}>{error.error}</span>}
        <button className={style.button} disabled={loading}>
          SignUp
        </button>
      </form>
      <button className={style.LButton}>
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default SignUpLayout;

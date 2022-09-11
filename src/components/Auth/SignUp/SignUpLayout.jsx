import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./SignUpLayout.module.css";

const SignUpLayout = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState({});

  const submit = async (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (
      userName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      return;
    }
    try {
      const res = await axios.post("/register", {
        userName,
        email,
        password,
      });
    } catch (err) {
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
        <button className={style.button}>SignUp</button>
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

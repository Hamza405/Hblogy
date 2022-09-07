import { Link } from "react-router-dom";
import style from "./SignUpLayout.module.css";

const SignUpLayout = () => {
  return (
    <div className={style.signUp}>
      <span className={style.title}>SignUp</span>
      <form className={style.form}>
        <label htmlFor="userName">User Name</label>
        <input id="userName" type="text" placeholder="Enter your User Name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />
        <label htmlFor="email">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
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

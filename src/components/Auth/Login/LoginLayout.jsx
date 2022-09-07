import { Link } from "react-router-dom";
import style from "./LoginLayout.module.css";

const LoginLayout = () => {
  return (
    <div className={style.login}>
      <span className={style.title}>Login</span>
      <form className={style.form}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />
        <label htmlFor="email">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <button className={style.button}>Login</button>
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

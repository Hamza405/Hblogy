import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import style from "./TopBar.module.css";

const path = "http://localhost:5000/images/";

const TopBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className={style.topBar}>
      <div className={style.topLeft}>
        <i className={`${style.topIcon} fab fa-facebook-square`}></i>
        <i className={`${style.topIcon} fab fa-instagram-square`}></i>
        <i className={`${style.topIcon} fab fa-github-square`}></i>
        <i className={`${style.topIcon} fab fa-twitter-square`}></i>
      </div>
      <div className={style.topCenter}>
        <ul className={style.topList}>
          <li className={style.topListItem}>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className={style.topListItem}>
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className={style.topListItem}>
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className={style.topListItem}>
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li onClick={logoutHandler} className={style.topListItem}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className={style.topRight}>
        {user ? (
          <Link className="link" to="settings">
            <img
              src={
                user.profilePicture
                  ? `${path}${user.profilePicture}`
                  : "https://cdn4.vectorstock.com/i/thumb-large/98/38/person-gray-photo-placeholder-woman-vector-23519838.jpg"
              }
              alt="image"
              className={style.topImage}
            />
          </Link>
        ) : (
          <ul className={style.topList}>
            <li className={style.topListItem}>
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className={style.topListItem}>
              <Link to="/signup" className="link">
                SIGNUP
              </Link>
            </li>
          </ul>
        )}

        <i className={`${style.topSearchIcon} fas fa-search`} />
      </div>
    </div>
  );
};

export default TopBar;

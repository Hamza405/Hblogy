import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./SideBar.module.css";
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCat();
  }, []);

  return (
    <div className={style.sideBar}>
      <SideBarItem title="about me">
        <img
          alt="ABOUT ME"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW73V4EqTE35_guM_QU9WJMVHKqwH6sCK3xPUPTk6IdA&s"
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis deserunt beatae cum! Distinctio, consectetur deleniti
          corporis, soluta aliquam facilis.
        </p>
      </SideBarItem>
      <SideBarItem title="categories">
        <ul className={style.catList}>
          {categories.map((cat) => (
            <Link className="link" to={`/?cat=${cat.name}`}>
              <li key={cat._id} className={style.catListItem}>
                {cat.name}
              </li>
            </Link>
          ))}
        </ul>
      </SideBarItem>
      <SideBarItem title="Follow us">
        <div className={style.socialList}>
          <i className={`${style.socialIcon} fab fa-facebook-square`}></i>
          <i className={`${style.socialIcon} fab fa-instagram-square`}></i>
          <i className={`${style.socialIcon} fab fa-github-square`}></i>
          <i className={`${style.socialIcon} fab fa-twitter-square`}></i>
        </div>
      </SideBarItem>
    </div>
  );
};

export default SideBar;

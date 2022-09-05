import style from "./SideBar.module.css";
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = () => {
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
          <li className={style.catListItem}>Life</li>
          <li className={style.catListItem}>Music</li>
          <li className={style.catListItem}>Sport</li>
          <li className={style.catListItem}>Sex</li>
          <li className={style.catListItem}>Tech</li>
          <li className={style.catListItem}>Farms</li>
          <li className={style.catListItem}>phons</li>
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

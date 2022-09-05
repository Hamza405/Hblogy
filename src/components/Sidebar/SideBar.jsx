import style from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <div className={style.sideBarItem}>
        <span className={style.title}>About me</span>
        <img
          alt="ABOUT ME"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW73V4EqTE35_guM_QU9WJMVHKqwH6sCK3xPUPTk6IdA&s"
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis deserunt beatae cum! Distinctio, consectetur deleniti
          corporis, soluta aliquam facilis.
        </p>
      </div>
      <div className={style.sideBarItem}>
        <span className={style.title}>Categories</span>
        <ul className={style.catList}>
          <li className={style.catItem}>Life</li>
          <li className={style.catItem}>Music</li>
          <li className={style.catItem}>Sport</li>
          <li className={style.catItem}>Sex</li>
          <li className={style.catItem}>Tech</li>
          <li className={style.catItem}>Farms</li>
          <li className={style.catItem}>phons</li>
        </ul>
      </div>
      <div className={style.sideBarItem}>
        <span className={style.title}>Follow US</span>
        <div className={style.topLeft}>
          <i className={`${style.sidebarIcon} fab fa-facebook-square`}></i>
          <i className={`${style.sidebarIcon} fab fa-instagram-square`}></i>
          <i className={`${style.sidebarIcon} fab fa-github-square`}></i>
          <i className={`${style.sidebarIcon} fab fa-twitter-square`}></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

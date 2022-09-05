import style from "./TopBar.module.css"

const TopBar= () => {
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
          <li className={style.topListItem}>Home</li>
          <li className={style.topListItem}>ABOUT</li>
          <li className={style.topListItem}>Contact</li>
          <li className={style.topListItem}>Write</li>
          <li className={style.topListItem}>Logout</li>
        </ul>
      </div>
      <div className={style.topRight}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW73V4EqTE35_guM_QU9WJMVHKqwH6sCK3xPUPTk6IdA&s" alt="image" className={style.topImage} />
        <i className={`${style.topSearchIcon} fas fa-search`} />
      </div>
    </div>
  )
}

export default TopBar
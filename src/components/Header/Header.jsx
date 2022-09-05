import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.title}>
          <span className={style.titleSm}>React & Node</span>
          <span className={style.titleLg}>HBlogy</span>
        </div>
        <img className={style.img} src="https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </div>
  )
}

export default Header
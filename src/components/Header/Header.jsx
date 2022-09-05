import style from "./Header.module.css"

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.title}>
          <span className={style.titleSm}>React & Node</span>
          <span className={style.titleLg}>HBlogy</span>
        </div>
        <img className={style.img} src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}

export default Header
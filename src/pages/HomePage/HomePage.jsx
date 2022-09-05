import Header from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import SideBar from "../../components/Sidebar/SideBar"
import style from "./HomePage.module.css"

const HomePage = () => {
  return (
    <>
    <Header />
    <div className={style.home}>
        <Posts />
        <SideBar />
    </div>
    </>
  )
}

export default HomePage
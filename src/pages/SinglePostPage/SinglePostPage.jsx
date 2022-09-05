import SideBar from "../../components/Sidebar/SideBar";
import style from "./SinglePostPage.module.css";
import SinglePost from "../../components/SinglePost/SinglePost";

const SinglePostPage = () => {
  return (
    <div className={style.postPage}>
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default SinglePostPage;

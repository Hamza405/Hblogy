import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={style.posts}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;

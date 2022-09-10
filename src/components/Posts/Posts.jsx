import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = ({ posts }) => {
  return (
    <div className={style.posts}>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;

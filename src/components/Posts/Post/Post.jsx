import style from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className={style.post}>
      <img
        className={style.img}
        src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className={style.info}>
        <div className={style.postCat}>
          {post.categories.map((cat) => (
            <span>{cat}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <div className={style.postTitle}>{post.title}</div>
        </Link>
        <hr />
        <span className={style.postDate}>
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className={style.postDes}>{post.description}</p>
      </div>
    </div>
  );
};

export default Post;

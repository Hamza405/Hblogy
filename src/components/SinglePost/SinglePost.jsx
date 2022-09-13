import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./SinglePost.module.css";
import AuthContext from "../../store/AuthContext";

const SinglePost = () => {
  const navigate = useNavigate();
  const path = "http://localhost:5000/images/";
  const { user } = useContext(AuthContext);
  const postId = useLocation().pathname.split("/")[2];
  const [post, setPost] = useState({});

  const deletePostHandler = async () => {
    try {
      await axios.delete("/posts/" + post._id, {
        data: { userName: user.userName },
      });
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
    };
    fetchPost();
  }, [postId]);

  return (
    <div className={style.post}>
      <div className={style.wrapper}>
        <img
          alt="s"
          className={style.img}
          src={
            post.photo
              ? path + post.photo
              : "https://images.wallpaperscraft.com/image/single/books_vintage_paper_cards_notebook_retro_74362_300x168.jpg"
          }
        />
        <h1 className={style.title}>
          {post.title}
          {user?.userName === post.userName && (
            <div className={style.edit}>
              <i className={`${style.editIcon} far fa-edit`} />
              <i
                className={`${style.editIcon} far fa-trash-alt`}
                onClick={deletePostHandler}
              />
            </div>
          )}
        </h1>
        <div className={style.info}>
          <span className={style.infoAuthor}>
            Author :
            <Link className="link" to={`/?user=${post.userName}`}>
              <b>{post.userName}</b>
            </Link>
          </span>
          <span className={style.infoDate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className={style.description}>{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;

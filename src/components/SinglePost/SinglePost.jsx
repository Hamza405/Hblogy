import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import style from "./SinglePost.module.css";

const SinglePost = () => {
  const path = "http://localhost:5000/images/";
  const postId = useLocation().pathname.split("/")[2];
  const [post, setPost] = useState({});

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
          <div className={style.edit}>
            <i className="editIcon far fa-edit" />
            <i className="editIcon far fa-trash-alt" />
          </div>
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

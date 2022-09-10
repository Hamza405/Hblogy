import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import style from "./SinglePost.module.css";

const SinglePost = () => {
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
          className={style.img}
          src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            Author : <b>{post.userName}</b>
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

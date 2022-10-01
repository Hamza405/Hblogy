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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postCats, setPostCats] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);

  const deletePostHandler = async () => {
    try {
      await axios.delete(`/posts/${postId}`, {
        headers: {
          authorization: "Bearer " + user.token,
        },
      });
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const updatePostHandler = async () => {
    try {
      await axios.put(
        "/posts/" + post._id,
        {
          userName: user.userName,
          title,
          description,
        },
        {
          headers: {
            authorization: "Bearer " + user.token,
          },
        }
      );
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPostCats(res.data.categories);
      console.log(res.data);
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
        {updateMode ? (
          <input
            type="text"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={style.titleInput}
          />
        ) : (
          <h1 className={style.title}>
            {title}
            {user?.userName === post.userName && (
              <div className={style.edit}>
                <i
                  className={`${style.editIcon} far fa-edit`}
                  onClick={() => setUpdateMode(true)}
                />
                <i
                  className={`${style.editIcon} far fa-trash-alt`}
                  onClick={deletePostHandler}
                />
              </div>
            )}
          </h1>
        )}

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

        <div className={style.postCat}>
          {postCats.map((cat) => (
            <span key={cat}>{cat}</span>
          ))}
        </div>
        {updateMode ? (
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={style.descriptionInput}
          />
        ) : (
          <p className={style.description}>{description}</p>
        )}
        {updateMode && (
          <button className={style.updateButton} onClick={updatePostHandler}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;

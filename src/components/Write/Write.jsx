import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import style from "./Write.module.css";

const Write = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const post = {
      userName: user.userName,
      title,
      description,
    };
    if (photo) {
      const data = new FormData();
      const fileName = Date.now() + photo.name;
      data.append("name", fileName);
      data.append("file", photo);
      post.photo = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", post);
      navigate(`/post/${res.data._id}`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.write}>
      {photo && <img className={style.img} src={URL.createObjectURL(photo)} />}
      <form className={style.writeForm} onSubmit={submitHandler}>
        <div className={style.writeFormGroup}>
          <label htmlFor="fileInput">
            <i className={`${style.icon} fas fa-plus`} />
          </label>
          <input
            onChange={(event) => setPhoto(event.target.files[0])}
            id="fileInput"
            type="file"
            style={{ display: "none" }}
          />
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Title"
            autoFocus={true}
            className={style.writeInput}
          />
        </div>
        <div className={style.writeFormGroup}>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className={style.writeText}
            type="text"
            placeholder="Tell us your story"
          ></textarea>
          <button className={style.submit}>Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;

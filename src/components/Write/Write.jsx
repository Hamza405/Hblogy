import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import style from "./Write.module.css";

const none = "None";

const Write = ({ categories }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [postCat, setPostCat] = useState(none);

  const submitHandler = async (event) => {
    event.preventDefault();
    const post = {
      userName: user.userName,
      title,
      description,
      categories: postCat === [] ? null : [postCat],
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
      const res = await axios.post("/posts", post, {
        headers: {
          authorization: "Bearer " + user.token,
        },
      });
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
          <label className={style.catLabel} htmlFor="cat">
            Category :
          </label>
          <select
            value={postCat}
            onChange={(i) => setPostCat(i.target.value)}
            className={style.cat}
            id="cat"
          >
            <option id={none} value={none} key={none}>
              None
            </option>
            {categories.map((cat) => (
              <option key={cat.key} id={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
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

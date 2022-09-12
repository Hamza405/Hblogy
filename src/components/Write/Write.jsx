import { useState, useContext } from "react";
import AuthContext from "../../store/AuthContext";
import style from "./Write.module.css";

const Write = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const post = {
      userName: user.userName,
      title,
      description,
    };
  };

  return (
    <div className={style.write}>
      <img
        className={style.img}
        src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <form className={style.writeForm}>
        <div className={style.writeFormGroup}>
          <label htmlFor="fileInput">
            <i className={`${style.icon} fas fa-plus`} />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
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

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../services/firebase";
import AuthContext from "../../store/AuthContext";
import style from "./Settings.module.css";
import { useEffect } from "react";
import personImage from "../../assets/images/person.jpg";

const path = "http://localhost:5000/images/";

const Settings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setUserName(user.userName);
    setEmail(user.email);
  }, [user]);

  const submitHandler = async (event) => {
    event.preventDefault();
    setError(null);
    const updatedUser = {
      userId: user._id,
      userName,
      email,
      password,
    };
    if (password.length === 0) {
      setError("Should enter your password or new password");
      return;
    }
    if (file) {
      const photoName = Date.now() + file.name;
      // Uploaded image to storage and get it's url
      try {
        const storageRef = ref(storage, `/hblogy/postsImages/${photoName}`);
        const uploadedPhoto = await uploadBytesResumable(storageRef, file);
        const photoUrl = await getDownloadURL(uploadedPhoto.ref);
        updatedUser.profilePicture = photoUrl;
      } catch (err) {
        console.log(err);
      }
      // Upload to node server
      // const data = new FormData();
      // const fileName = Date.now() + file.name;
      // data.append("name", fileName);
      // data.append("file", file);
      // updatedUser.profilePicture = fileName;
      // try {
      //   await axios.post("/upload", data);
      // } catch (err) {
      //   console.log(err);
      // }
    }
    try {
      await axios.put(`/users/${user._id}`, updatedUser, {
        headers: {
          authorization: "Bearer " + user.token,
        },
      });
      navigate(`/settings`, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.settings}>
      <div className={style.settingsTitle}>
        <span className={style.updateTitle}>Update your account</span>
        <span className={style.deleteTitle}>Delete your account</span>
      </div>
      <form className={style.form} onSubmit={submitHandler}>
        <label>Profile Picture</label>
        <div className={style.profilePicture}>
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : user.profilePicture
                ? `${path}${user.profilePicture}`
                : personImage
            }
            alt="image"
            className={style.topImage}
          />
          <label htmlFor="fileInput">
            <i className={`${style.profilePictureIcon} far fa-user-circle`} />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <label>User Name</label>
        <input
          type="text"
          placeholder={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          style={{ borderColor: error && "red" }}
          type="Password"
          placeholder="Ha1@."
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={style.error}>{error}</p>}
        <button className={style.submit} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Settings;

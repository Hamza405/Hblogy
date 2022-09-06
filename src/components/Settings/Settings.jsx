import style from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={style.settings}>
      <div className={style.settingsTitle}>
        <span className={style.updateTitle}>Update your account</span>
        <span className={style.deleteTitle}>Delete your account</span>
      </div>
      <form className={style.form}>
        <label>Profile Picture</label>
        <div className={style.profilePicture}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW73V4EqTE35_guM_QU9WJMVHKqwH6sCK3xPUPTk6IdA&s"
            alt="image"
            className={style.topImage}
          />
          <label htmlFor="fileInput">
            <i className={`${style.profilePictureIcon} far fa-user-circle`} />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
        </div>
        <label>User Name</label>
        <input type="text" placeholder="Hamza" />
        <label>Email</label>
        <input type="email" placeholder="hamzash863@gmail.com" />
        <label>Password</label>
        <input type="Password" />
        <button className="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;

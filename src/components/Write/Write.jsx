import style from "./Write.module.css";

const Write = () => {
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
            type="text"
            placeholder="Title"
            autoFocus={true}
            className={style.writeInput}
          />
        </div>
        <div className={style.writeFormGroup}>
          <textarea
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

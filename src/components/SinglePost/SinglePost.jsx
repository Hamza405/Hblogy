import style from "./SinglePost.module.css";

const SinglePost = () => {
  return (
    <div className={style.post}>
      <div className={style.wrapper}>
        <img
          className={style.img}
          src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <h1 className={style.title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <div className={style.edit}>
            <i className="editIcon far fa-edit" />
            <i className="editIcon far fa-trash-alt" />
          </div>
        </h1>
        <div className={style.info}>
          <span className={style.infoAuthor}>
            Author : <b>Hamza</b>
          </span>
          <span className={style.infoDate}>1 Hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis
          unde sed praesentium qui cum iusto illum consequatur assumenda quod
          commodi nam totam perferendis, quidem debitis fuga eum quibusdam
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos facilis unde sed praesentium qui cum iusto illum consequatur
          assumenda quod commodi nam totam perferendis, quidem debitis fuga eum
          quibusdam consectetur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quos facilis unde sed praesentium qui cum iusto
          illum consequatur assumenda quod commodi nam totam perferendis, quidem
          debitis fuga eum quibusdam consectetur.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

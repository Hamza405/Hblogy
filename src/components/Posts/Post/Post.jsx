import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.post}>
      <img
        className={style.img}
        src="https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className={style.info}>
        <div className={style.postCat}>
          <span>Music</span>
          <span>Life</span>
        </div>
        <div className={style.postTitle}>Lorem, ipsum dolor sit amet.</div>
        <hr />
        <span className={style.postDate}>1 Hour ago.</span>
        <p className={style.postDes}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi
          illum consequuntur nulla reprehenderit doloribus odit voluptatem
          molestiae. Modi veniam tenetur enim fugit reprehenderit? Officia eos
          minus eius ex dolor? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam quasi illum consequuntur nulla reprehenderit
          doloribus odit voluptatem molestiae. Modi veniam tenetur enim fugit
          reprehenderit? Officia eos minus eius ex dolor? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aliquam quasi illum consequuntur
          nulla reprehenderit doloribus odit voluptatem molestiae. Modi veniam
          tenetur enim fugit reprehenderit? Officia eos minus eius ex dolor?
        </p>
      </div>
    </div>
  );
};

export default Post;

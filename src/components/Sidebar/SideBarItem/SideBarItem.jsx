import style from "./SideBarItem.module.css";

const SideBarItem = (props) => {
  return (
    <div className={style.sideBarItem}>
      <span className={style.title}>{props.title}</span>
      {props.children}
    </div>
  );
};

export default SideBarItem;

import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/Sidebar/SideBar";
import style from "./HomePage.module.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className={style.home}>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};

export default HomePage;

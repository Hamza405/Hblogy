import { useState, useEffect } from "react";
import axios from "axios";
import Write from "../../components/Write/Write";

const WritePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCat();
  }, []);
  return <Write categories={categories} />;
};

export default WritePage;

// import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch.js";

const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <h4>{error}</h4>}
      {pending && <h3>lodding...</h3>}
      {blogs && <BlogList data={blogs} title="All block" />}
    </div>
  );
};
export default Home;

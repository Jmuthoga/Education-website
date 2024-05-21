import React from "react";
import Back from "../Back/Back";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <Back title="Blog" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;

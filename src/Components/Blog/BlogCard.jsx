import React from "react";
import "./Blog.css";
import { blog } from "../../dummydata";

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => {
        return (
          <div className="items shadow">
            <div className="img">
              <img src={val.cover} alt="" />
            </div>
            <div className="text">
              <div className="admin flexSB">
                <span>
                  <i className="fa fa-user" />
                  <label htmlFor="">{val.type}</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt" />
                  <label htmlFor="">{val.date}</label>
                </span>
                <span>
                  <i className="fa fa-comment" />
                  <label htmlFor="">{val.com}</label>
                </span>
              </div>
              <h1>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;

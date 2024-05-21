import React from "react";
import Title from "../../Components/Common/heading/Title/Title";
import { blog } from "../../dummydata";

const Hblog = () => {
  return (
    <>
      <div className="section blog">
        <div className="container">
          <Title subtitle="Our Blog" title="Recent From Blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Hblog;

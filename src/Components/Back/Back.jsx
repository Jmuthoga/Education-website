import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();
  return (
    <>
      <section className="back">
        <h1>Home / {location.pathname.split("/")[1]}</h1>
        <h2>{title}</h2>
      </section>
      <div className="marigin"></div>
    </>
  );
};

export default Back;

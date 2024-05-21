import React from "react";
import "./Hero.css";
import Title from "../../Components/Common/heading/Title/Title";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education"
            />
            <p>
              Learning should be accessible to everyone, regardless of their
              location or background. That's why John Muthoga created Academia,
              an online Learning platform that offers comprehensive, fully
              online courses that are tailored to your needs. With interactive
              lessons, real-world projects, and personalized support from
              instructors, you'll gain skills and confidence you need to succeed
              in your personal and professional life.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSES
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  );
};

export default Hero;

import React from "react";
import "./Footer.css";
import { blog } from "../../dummydata";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newletter stay tuned and get the latest update</h1>
            <span>Far far away, behind the words of mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane" />
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>Online Education & Learning</span>
            <p>
              Dolor sit amet consectetur adipisicing elit. Molestiae tempora
              sequi error natus aspernatur minus? Ratione recusandae
            </p>
            <i className="fab fa-facebook-f icon" />
            <i className="fab fa-instagram icon" />
            <i className="fab fa-twitter icon" />
            <i className="fab fa-tiktok icon" />
          </div>
          <div className="box link">
            <h3>Explore More</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa fa-user" />
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt" />
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have a Quesion?</h3>
            <ul>
              <li>
                <i className="fa fa-map" />
                557-10106 OTHAYA, NYERI, NAIROBI-KENYA
              </li>
              <li>
                <i className="fa fa-phone-alt" />
                +254 791446968
              </li>
              <li>
                <i className="fa fa-paper-plane" />
                johnmuthogakanyingi@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright @2024 All rights reserved / This template is made{" "}
          <i className="fa fa-heart" /> by John Muthoga
        </p>
      </div>
    </>
  );
};

export default Footer;

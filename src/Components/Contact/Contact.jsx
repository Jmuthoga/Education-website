import React from "react";
import "./Contact.css";
import Back from "../Back/Back";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127642.91596096684!2d36.7362048!3d-1.2681216000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1716209568758!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map} />
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quasi fugit, cum, nesciunt rem laudantium similique officiis
              blanditiis adipisci soluta quisquam inventore nulla exercitationem
              rerum asperiores neque dolores iusto id!
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>557-10106 OTHAYA, NYERI, NAIROBI - KENYA</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>johnmuthogakanyingi@gmail.com</p>
              </div>
              <div className="box">
                <h4>phone:</h4>
                <p>+254791446968</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here....
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow Us Here</h3>
            <span>FACEBOOK TWITTER INSTRAGRAM</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

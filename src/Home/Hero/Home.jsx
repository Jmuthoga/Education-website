import React from "react";
import Hero from "./Hero";
import AboutCard from "../../Components/About/AboutCard";
import HAbout from "./HAbout";
import Test from "../Testimonial/Test";
import Hprice from "./Hprice";
import Hblog from "./Hblog";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hprice />
      <Hblog />
    </div>
  );
};

export default Home;

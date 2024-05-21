import React from "react";
import "./App.css";
import Header from "./Components/Common/heading/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Hero/Home";
import About from "./Components/About/About";
import CourseHome from "./Components/AllCourses/CourseHome";
import Team from "./Components/Team/Team";
import Price from "./Components/Pricing/Price";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

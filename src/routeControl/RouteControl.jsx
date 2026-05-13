import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Project from "../pages/project/Project";
import Blog from "../pages/blog/Blog";

const RouteControl = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default RouteControl;

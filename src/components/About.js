import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <h1>This is about page of food villa</h1>
      <Outlet />
    </div>
  );
};

export default About;

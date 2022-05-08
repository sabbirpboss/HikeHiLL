import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container row mx-auto pt-4 pb-4">
        <div className="col-md-4 about">
          <h2>About</h2>
          <p className="text-justify">
            The Hiking Gears is a compilation of tips and advice on trip
            planning, lightweight backpacking techniques, and improving your
            wilderness skill set. It contains detailed information for more than
            200 of the world's great hikes and was put together with the mission
            of inspiring and enabling folks to go backpacking.
          </p>
        </div>
        <div className="col-md-4 contact">
          <h2>Contact</h2>
          <div>
            <p>123, Lorem Ipsum, Dummy City, FL-12345 USA</p>
            <p>+(1) 123-878-1649 | +(1) 123-878-1649</p>
          </div>
        </div>
        <div className="col-md-4 copyright">
          <p className="mt-5">
            &copy;Copyright 2025 <Link to="/">HikeHill</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

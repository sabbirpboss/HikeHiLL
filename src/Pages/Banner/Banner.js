import React from "react";
import "./Banner.css";
import banner from "../../images/banner.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h1 className="w-100 mx-auto">Hiking Gears</h1>
            <h4 className="w-100 mx-auto">All what you need for Hike</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="Second slide" />

          <Carousel.Caption>
            <h1 className="w-100 mx-auto">Hiking Gears</h1>
            <h4 className="w-100 mx-auto">All what you need for Hike</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner} alt="Third slide" />

          <Carousel.Caption>
            <h1 className="w-100 mx-auto">Hiking Gears</h1>
            <h4 className="w-100 mx-auto">All what you need for Hike</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

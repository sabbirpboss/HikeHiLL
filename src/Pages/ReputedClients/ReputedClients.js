import React from "react";
import one from '../../images/client-1.jpg'
import two from '../../images/client-2.jpg'
import three from '../../images/client-3.jpg'
import four from '../../images/client-4.jpg'
import five from '../../images/client-5.jpg'
import six from '../../images/client-6.jpg'
import seven from '../../images/client-7.jpg'
import eight from '../../images/client-8.jpg'
import nine from '../../images/client-9.jpg'
import ten from '../../images/client-10.jpg'
import eleven from '../../images/client-11.jpg'
import { Carousel } from "react-bootstrap";
import "./ReputedClients.css";

const ReputedClients = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="w-50 mx-auto">
        <h2>
          Some Of Our
          <br />
          <span className="text-info">Reputed Clients</span>
        </h2>
        <div className="custom-border"></div>
        <p className="w-50 mx-auto">
          Through our experienced operations team we can handle various kind of
          supply chain operations and services
        </p>
      </div>
      <div className="clients">
        <Carousel className="d-flex">
          <Carousel.Item>
            <img src={one}
              alt="First slide"
            />
            <img src={two}
              alt="Second slide"
            />
            <img src={three}
              alt="Third slide"
            />
            <img src={four}
              alt="Fourth slide"
            />
            <img src={five}
              alt="Five slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src={six}
              alt="six slide"
            />
            <img src={seven}
              alt="seven slide"
            />
            <img src={eight}
              alt="eight slide"
            />
            <img src={nine}
              alt="nine slide"
            />
            <img src={ten}
              alt="ten slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ReputedClients;

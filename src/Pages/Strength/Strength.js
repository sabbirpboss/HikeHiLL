import React from "react";
import strength from "../../images/strength.jpg";

const Strength = () => {
  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-6">
        <img src={strength} alt="" />
      </div>
      <div className="col-md-6">
        <h2>
          Our
          <br />
          <span className="text-info">Strength</span>
          <div className="custom-border"></div>
          <ul className="ms-5 mt-5 fs-6 fw-light custom-list">
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">Our objective is to Reduce our clients overall Logistics Cost</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">Our objective is to Reduce our clients overall Logistics Cost</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">Our objective is to Reduce our clients overall Logistics Cost</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
              <li className="mb-3 w-75">We are currently servicing clients across the sectors of FMCG</li>
          </ul>
        </h2>
      </div>
    </div>
  );
};

export default Strength;

import React from "react";
import Banner from "../Banner/Banner";
import ReputedClients from "../ReputedClients/ReputedClients";
import Strength from "../Strength/Strength";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <ReputedClients></ReputedClients>
      <Strength></Strength>
    </div>
  );
};

export default Homepage;

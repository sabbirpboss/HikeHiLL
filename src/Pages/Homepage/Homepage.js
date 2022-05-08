import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";
import ReputedClients from "../ReputedClients/ReputedClients";
import Strength from "../Strength/Strength";

const Homepage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="mt-5 mb-5">
        <h2 className="mb-4">Our Gear's</h2>
        <div className="container gears-container">
          {items.slice(0, 6).map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </div>
      </div>
      <ReputedClients></ReputedClients>
      <Strength></Strength>
    </div>
  );
};

export default Homepage;

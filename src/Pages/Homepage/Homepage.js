import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import ReputedClients from "../ReputedClients/ReputedClients";
import Strength from "../Strength/Strength";

const Homepage = () => {
  const [items, setItems] = useItems();
  return (
    <div>
      {
        items.length?
        <Banner></Banner>
        :
        <Loading></Loading>
      }
      
      <div className="mt-5 mb-5">
        <h2 className="mb-4">Our Gear's</h2>
        <div className="container gears-container">
          {items.slice(0, 6).map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
          <Link to="/manage">
            <button className="bg-success border-0 rounded p-3 fw-bold text-white my-4">Manage Inventories</button>
          </Link>
      </div>
      <ReputedClients></ReputedClients>
      <Strength></Strength>
    </div>
  );
};

export default Homepage;

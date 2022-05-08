import React, { useEffect, useState } from "react";
import "./Inventory.css";
import Item from "../Item/Item";

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="mt-5 mb-5">
      <h2 className="mb-4">Inventory: Our Gear's</h2>
      <div className="container gears-container">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Inventory;

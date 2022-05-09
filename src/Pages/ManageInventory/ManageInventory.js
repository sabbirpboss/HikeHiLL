import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageItem from "../ManageItem/ManageItem";

const ManageInventory = () => {
  const [refresh, setRefresh] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [refresh]);

  return (
    <div>
      <h2 className="mb-4">Inventory: Our Gear's</h2>
      <Link to="/additem">
      <button className="btn-info p-2 my-4 rounded border border-warning fw-bold text-white fs-5">Add New Item</button>
      </Link>
      <div className="container gears-container">
        {items.map((item) => (
          <ManageItem key={item._id} item={item} setRefresh={setRefresh}></ManageItem>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;

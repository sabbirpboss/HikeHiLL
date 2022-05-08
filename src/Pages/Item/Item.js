import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  const { name, image, price, quantity, supplier, description } = item;

  return (
    <div className="item-card">
      <div>
        <img src={image} alt="" />
      </div>
      <h3 title={name}>{name.slice(0, 15)}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <h6>Supplier: {supplier}</h6>
      <p className="description">{description.slice(0, 75)}...</p>
      <div className="update-btn">
          <button className="btn btn-info w-100">Update</button>
      </div>
    </div>
  );
};

export default Item;

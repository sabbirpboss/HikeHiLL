import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  const {_id, name, image, price, quantity, supplier, description } = item;

  const navigate = useNavigate()

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
          <button onClick={() => navigate(`/inventory/${_id}`)} className="btn btn-info w-100">Update</button>
      </div>
    </div>
  );
};

export default Item;

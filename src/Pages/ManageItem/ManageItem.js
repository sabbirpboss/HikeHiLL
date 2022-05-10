import React from "react";
import { toast } from "react-toastify";
import "./ManageItem.css";

const ManageItem = ({ item, setRefresh }) => {
  const { _id, name, image, price, quantity, supplier, description } = item;

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you Sure?");

    if (proceed) {
      fetch(`http://localhost:5000/item/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      toast.success("Delete Success");
    }
    setRefresh(id);
  };

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
        <button
          onClick={() => handleDeleteItem(_id)}
          className="btn btn-info w-100"
        >
          Delete Now
        </button>
      </div>
    </div>
  );
};

export default ManageItem;

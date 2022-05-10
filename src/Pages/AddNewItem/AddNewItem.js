import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handlePostItem = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const userEmail = user.email;

    const items = {
      name,
      supplier,
      price,
      quantity,
      description,
      image,
      userEmail,
    };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.reset();
    toast.success("Item Added");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Add A New Item</h2>
      <form className="d-flex flex-column" onSubmit={handlePostItem}>
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Item Name"
          name="name"
        />
        <textarea
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Item Description"
          name="description"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Item Price"
          type="number"
          name="price"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Item Supplier Name"
          type="text"
          name="supplier"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Item Quantity"
          type="number"
          name="quantity"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Item Photo URL"
          type="text"
          name="image"
        />
        <input
          className="text-white fs-5 fw-bold rounded p-2 border-0 bg-info"
          type="submit"
          value="Add Service"
        />
      </form>
      <div>
        <Link to="/myitem">
          <button className="btn-warning border-0 p-3 rounded my-5 fs-4 text-white">
            My Item is Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddNewItem;

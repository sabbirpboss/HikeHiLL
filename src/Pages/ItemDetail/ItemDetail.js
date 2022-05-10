import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  //   console.log(product);

  const [refresh, setRefresh] = useState(0);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [refresh, id]);

  const handleAddMore = (event) => {
    event.preventDefault();
    const q = event.target.number.value;
    // console.log(q);
    const name = product.name;
    const supplier = product.supplier;
    const price = product.price;
    const quantity = parseInt(product.quantity) + Number(q);
    const description = product.description;
    const image = product.image;

    const updatedproduct = {
      name,
      supplier,
      price,
      quantity,
      description,
      image,
    };

    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedproduct),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setRefresh(refresh + 1);
    event.target.reset();
    // toast.success('Added successfully')
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    // console.log(q);
    const name = product.name;
    const supplier = product.supplier;
    const price = product.price;
    const quantity = parseInt(product.quantity) - 1;
    const description = product.description;
    const image = product.image;

    const updatedproduct = {
      name,
      supplier,
      price,
      quantity,
      description,
      image,
    };

    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedproduct),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setRefresh(refresh + 1);
    event.target.reset();
    // toast.success('Added successfully')
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">Product Name: <span className="text-success">{product.name}</span></h2>
      <div className="row">
        <div className="col-md-6 border border-info p-2 rounded">
          <div>
            <img
              className="w-75 border p-2 rounded border-0 mb-3"
              src={product.image}
              alt=""
            />
          </div>
          <h2>Price: {product.price}</h2>
          <h3>Quantity: {product.quantity}</h3>
          <h5>Supplier: {product.supplier}</h5>
          <p>Description: {product.description}</p>
        </div>
        <div className="col-md-6">
          <p className="text-success"><small>Do You Want Add More This Item?</small></p>
          <form onSubmit={handleAddMore}>
            <input type="number" name="number" placeholder="Add More" />
            <br />
            <input
              className="btn btn-success mt-2"
              type="submit"
              value="ADD MORE"
            />
          </form>
          <br />
          <button
            onClick={handleDecrease}
            className="btn-danger rounded p-2 border-0"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

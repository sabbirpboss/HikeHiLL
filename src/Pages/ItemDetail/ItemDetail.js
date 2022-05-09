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
    <div className="mt-5 mb-5">
      <h2>Welcome to single item by id: {product.name}</h2>
      <h4>{product.price}</h4>
      <h3>{product.quantity}</h3>
      <div>
        <form onSubmit={handleAddMore}>
          <input type="number" name="number" placeholder="Add More" />
          <br />
          <input className="btn btn-info" type="submit" value="ADD MORE" />
        </form>
        <button onClick={handleDecrease} className="btn-warning">Decrease</button>
      </div>
    </div>
  );
};

export default ItemDetail;

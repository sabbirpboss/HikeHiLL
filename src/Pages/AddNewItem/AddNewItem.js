import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddNewItem = () => {

    const [user] = useAuthState(auth);
    const handlePostItem = (e) => {

        e.preventDefault();

        const name = e.target.Name.value;
        const supplier = e.target.suppliername.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const userEmail = user.email;

        const items = { name, supplier, price, quantity, description, image, userEmail };

        fetch(`http://localhost:5000/item`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(items),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        e.target.reset();
        toast.success('Item Added');
    }

    return (
        <div className='container my-5'>
            <h2>Add A New Item</h2>
      <form className="d-flex flex-column" onSubmit={handlePostItem}>
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Name"
          type="text"
        />
        <textarea
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Description"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Price"
          type="number"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Supplier"
          type="text"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Quantity"
          type="number"
        />
        <input
          className="mb-2 rounded p-2 border-1 border-info"
          placeholder="Photo URL"
          type="text"
        />
        <input className='text-white fs-5 fw-bold rounded p-2 border-0 bg-info' type="submit" value="Add Service" />
      </form>
        </div>
    );
};

export default AddNewItem;
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import './MyItem.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const MyItem = () => {
  const [items, setItem] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://hikehill-server-a11.herokuapp.com/myitem?email=${user?.email}`;
    console.log(url);
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setItem(data);
        }
        if (data.message === "Forbidden Access") {
          signOut(auth);
          navigate("/login");
          toast.error("Forbidden Access (403)");
        }
        if (data.message === "Unauthorize Access") {
          signOut(auth);
          navigate("/login");
          toast.error("Unauthorize Access (401)");
        }
      });
  }, [navigate, user]);

  return (
    <div className="container my-5">
      <h2 className="text-info">This is my item lists</h2>
      <div className="custom-align">
      {
      items.length?
      items.map((item) => (
        <>
          <div className="item-card">
            <div>
              <img src={item.image} alt="" />
            </div>
            <h3 title={item.name}>{item.name.slice(0, 15)}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <h6>Supplier: {item.supplier}</h6>
            <p className="description">{item.description.slice(0, 75)}...</p>
          </div>
        </>
      ))
      :
      <Loading></Loading>
      }
      </div>
    </div>
  );
};

export default MyItem;

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/LOGO.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="header-section">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/inventory">Inventory</Link>
        {user?<Link to="/manage">Manage Inventory</Link>: ""}
        {user?<Link to="/myitem">My Item</Link>: ""}
        {user?<Link to="/additem">Add New Item</Link>: ""}
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About Us</Link>
        <span className="login-signup">
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <button className="bg-info border-0 rounded p-2" onClick={logout}>
              SignOut
            </button>
          )}
          {!user ? <Link to="/signup">SignUp</Link> : <></>}
        </span>
      </div>
    </div>
  );
};

export default Header;

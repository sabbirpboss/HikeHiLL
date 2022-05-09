import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if (user) {
    console.log("user", user);
  }
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="w-25 mx-auto my-5 rounded-3 d-flex justify-content-center align-items-center border border-info border-2">
      <div>
        <h2 className="mt-4 mb-4">
          Sign Up to
          <br /> <span className="text-info">Access In Warehouse</span>
        </h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              className="p-2 mb-3 rounded w-100"
              placeholder="Your Email"
              type="email"
              name="email"
              id="user-email"
              required
            />
          </div>
          <div className="input-group">
            <input
              className="p-2 mb-3 rounded w-100"
              placeholder="Set Password"
              type="password"
              name="password"
              id="user-password"
              required
            />
          </div>
          <div className="input-group">
            <input
              className="mt-1"
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label
              className={`ps-2 ${agree ? "" : "text-danger"}`}
              htmlFor="terms"
            >
              Accept HikeHill Terms and Conditions
            </label>
            <input
              disabled={!agree}
              className="form-submit w-75 mx-auto p-2 text-white rounded border-0 fs-5 mb-2 mt-3"
              type="submit"
              value="Sign Up"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
        </form>
        <button
          className="bg-info border-0 rounded p-2 mb-4 mt-0"
          onClick={() => signInWithGoogle()}
        >
          Sign In With Google
        </button>
        <p>
          Already Have An Account?{" "}
          <Link className="form-link text-decoration-none" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

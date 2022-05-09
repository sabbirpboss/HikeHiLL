import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="w-25 mx-auto my-5 rounded-3 d-flex justify-content-center align-items-center border border-info border-2">
      <div>
        <h2 className="text-info mt-3">Let's Get Started</h2>
        <p>Sign in to continue to Warehouse.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 input-group" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 input-group" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="info w-50 mx-auto d-block mb-2" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <button
          className="bg-info border-0 rounded p-2 mb-4 mt-3"
          onClick={() => signInWithGoogle()}
        >
          Sign In With Google
        </button>
        <p className="text-dark">
          New to Here?{" "}
          <Link
            className="form-link text-decoration-none text-success"
            to="/signUp"
            onClick={navigateRegister}
          >
            Create An Account
          </Link>{" "}
        </p>
        <button
          className="bg-info border-0 rounded p-2 mb-4"
          onClick={resetPassword}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default Login;

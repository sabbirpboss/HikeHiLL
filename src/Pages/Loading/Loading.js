import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="my-5">
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;

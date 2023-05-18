// eslint-disable-next-line no-unused-vars
import React from "react";
import error from "../../../../public/images/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="hero min-h-screen bg-[#dbe17f]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={error} alt="error" />
          <Link to="/" className="btn btn-wide mt-4">
            Go Back Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

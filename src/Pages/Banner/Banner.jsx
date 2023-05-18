// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("../../../public/images/bg-header.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Kids Day</h1>
          <p className="mb-5">
            Check our adventure outfit collection that will lead to a completely
            new experience.
          </p>
          <Link to="/shop" className="btn btn-wide">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

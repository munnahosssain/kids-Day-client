import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../../hooks/useTitle";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useTitle("Home");

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="hero min-h-screen banner"
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

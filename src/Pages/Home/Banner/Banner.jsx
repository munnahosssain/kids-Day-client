// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="hero min-h-screen banner"
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

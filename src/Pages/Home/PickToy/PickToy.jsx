import React from "react";
import boys from "../../../../public/images/boys.png";
import { Link } from "react-router-dom";

const PickToy = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("../../../../public/images/pick-bg.png")`,
      }}
    >
      <div className="lg:mx-48">
        <div className="text-neutral-content">
          <div className="lg:grid grid-cols-2 gap-4 items-center">
            <div className="lg:mt-36">
              <img src={boys} alt="pongTa boys" />
            </div>
            <div className="p-4">
              <h1 className="mb-5 text-5xl font-bold lg:w-2/3 uppercase lg:leading-tight">
                Pick the best toy for your kid.
              </h1>
              <p className="my-5 text-slate-950 text-xl font-semibold">
                Make play time a blast with our finest toys and games!
              </p>
              <Link to="/purchase">
                <button className="btn btn-wide">purchase</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickToy;

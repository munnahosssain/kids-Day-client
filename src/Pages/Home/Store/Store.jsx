import React from "react";
import image_1 from "../../../../public/images/image-1.jpg";
import image_2 from "../../../../public/images/image-2.jpg";
import image_3 from "../../../../public/images/image-3.jpg";
import useTitle from "../../../hooks/useTitle";

const Store = () => {
  return (
    <div className="lg:mx-48 lg:my-24">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Welcome To Our Store</h2>
        <p className="text-2xl m-2 text-[#9f9f9f]">
          Shop Juno Toy & Games Store goodies for your kids.
        </p>
        <div className="grid grid-cols-3 my-6 p-2">
          <div className="col-span-2">
            <img className="lg:p-6" src={image_1} alt="baby image" />
          </div>
          <div className="">
            <img
              className="lg:p-6 lg:h-80 sm:h-32 w-full "
              src={image_2}
              alt="baby image"
            />
            <img
              className="lg:p-8 lg:h-96 sm:h-32 w-full "
              src={image_3}
              alt="baby image"
            />
          </div>
        </div>
        <p className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse.
        </p>
      </div>
    </div>
  );
};

export default Store;

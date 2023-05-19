import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToy from "./AllToy";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="lg:mx-24">
      <div className="my-6 text-center">
        <input
          type="text"
          placeholder="Find toy here"
          className="input input-bordered input-accent w-full max-w-xl"
        />
      </div>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy, index) => (
            <AllToy key={toy._id} toy={toy} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

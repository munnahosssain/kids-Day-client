import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToy from "./MyToy";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, seToys] = useState([]);

  useEffect(() => {
    fetch(`https://kids-day-server.vercel.app/myToys/${user?.email}`)
      .then(res => res.json())
      .then(data => seToys(data));
  }, [user]);

  const handleSort = sortBy => {
    fetch(
      `https://kids-day-server.vercel.app/sortByPrice?email=${user?.email}&sort=${sortBy}`
    )
      .then(res => res.json())
      .then(data => seToys(data));
  };

  useTitle("My Toys");

  return (
    <div className="lg:mx-24 lg:my-12">
      <div className="my-6 flex items-center justify-end">
        <p className="text-black mr-6">Sort by:</p>
        <select
          className="select select-primary w-36"
          defaultValue="filter"
          onChange={e => handleSort(e.target.value)}
        >
          <option value="filter" disabled>
            Filter By
          </option>
          <option value="-1">High Price</option>
          <option value="1">Low Price</option>
        </select>
      </div>
      <table className="table table-zebra w-full">
        <thead>
          <tr className="bg-gray-200">
            <th>S/R</th>
            <th className="text-blue-500">Seller</th>
            <th className="text-blue-500">Toy Name</th>
            <th className="text-blue-500">Sub category</th>
            <th className="text-blue-500">Price</th>
            <th className="text-blue-500">Quantity</th>
            <th className="text-blue-500">Update</th>
            <th className="text-blue-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <MyToy key={toy._id} toy={toy} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

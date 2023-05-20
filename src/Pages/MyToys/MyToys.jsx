import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToy from "./MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, seToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then(res => res.json())
      .then(data => seToys(data));
  }, [user]);
  // console.log(toys);

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
          {toys.map((toy, index) => (
            <MyToy key={toy._id} toy={toy} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

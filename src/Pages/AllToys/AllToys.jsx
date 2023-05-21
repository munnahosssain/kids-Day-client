import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToy from "./AllToy";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToys = useLoaderData();
  const [query, setQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState(allToys);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = allToys.filter(toy =>
      toy.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredToys(filteredResults);
  };

  useTitle("All Toys");

  return (
    <div className="lg:mx-24">
      <div className="my-6 text-center">
        <input
          type="text"
          placeholder="Find toy here"
          onChange={handleInputChange}
          className="input input-bordered input-accent w-full max-w-xl"
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy, index) => (
            <AllToy key={toy._id} toy={toy} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

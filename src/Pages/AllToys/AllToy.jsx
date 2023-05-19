import React from "react";

const AllToy = ({ toy, index }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;
  const handleViewDetails = id => {
    console.log("clicked", id);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td>
        <button onClick={() => handleViewDetails(_id)} className="btn">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default AllToy;

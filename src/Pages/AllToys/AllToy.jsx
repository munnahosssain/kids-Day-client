import React from "react";
import { Link } from "react-router-dom";

const AllToy = ({ toy, index }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <td>
        <Link
          to={`/details/${_id}`}
          className="btn btn-primary pentagon-button"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToy;

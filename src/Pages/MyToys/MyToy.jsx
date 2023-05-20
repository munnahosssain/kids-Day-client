import React from "react";
import { Link } from "react-router-dom";

const MyToy = ({ toy, index }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;

  const handleDelete = id => {
    console.log("Deleted", id);
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
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default MyToy;

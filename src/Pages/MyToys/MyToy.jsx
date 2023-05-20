import React from "react";
import { Link } from "react-router-dom";

const MyToy = ({ toy, index }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;

  const handleDelete = id => {
    fetch(`http://localhost:5000/deleteToys/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{available_quantity} Items</td>
      <td>
        <Link to={`/toyUpdate/${_id}`}>
          <button className="btn btn-sm btn-outline btn-info font-bold">
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-outline btn-info font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToy;

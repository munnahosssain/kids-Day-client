import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyToy = ({ toy, index }) => {
  const { _id, seller_name, name, sub_category, price, available_quantity } =
    toy;

  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        fetch(`http://localhost:5000/deleteToys/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => res.json())
          .then(data => {
            swal("Your data file has been deleted!", {
              icon: "success",
            });
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        swal("Your Data file is safe!");
      }
    });
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

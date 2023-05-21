import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyUpdate = () => {
  const updateToys = useLoaderData();

  const {
    _id,
    picture_url,
    name,
    seller_name,
    seller_email,
    sub_category,
    price,
    rating,
    available_quantity,
    description,
  } = updateToys;
  console.log(_id);

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.quantity.value;
    const picture_url = form.picture.value;
    const description = form.description.value;

    const updateData = {
      name,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      available_quantity,
      picture_url,
      description,
    };

    fetch(`https://kids-day-server.vercel.app/allToys/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Good job!",
            text: "Successfully added your submission!",
            icon: "success",
            button: "Aww yiss!",
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleUpdate}>
        <div className="flex">
          <div>
            <div className="m-4">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                readOnly
                name="name"
                placeholder="Your name"
                className="input w-full max-w-xl input-info"
              />
              <label className="label mt-4">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={seller_name}
                readOnly
                name="seller_name"
                placeholder="Seller Name"
                className="input w-full max-w-xl input-info"
              />
            </div>
            <div className="m-4">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                defaultValue={seller_email}
                readOnly
                name="seller_email"
                placeholder="Seller Email"
                className="input w-full max-w-xl input-info"
              />
              <input
                type="text"
                defaultValue={sub_category}
                readOnly
                name="category"
                placeholder="Category"
                className="input w-full max-w-xl input-info mt-6"
              />
            </div>
          </div>
          <div>
            <div className="m-4">
              <label className="label label-xs">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                name="price"
                placeholder="Price"
                className="input w-full max-w-xl input-info"
              />
              <label className="label mt-4 label-xs">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                defaultValue={rating}
                readOnly
                name="rating"
                placeholder="Rating"
                className="input w-full max-w-xl input-info"
              />
            </div>
            <div className="m-4">
              <label className="label label-xs">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                defaultValue={available_quantity}
                name="quantity"
                placeholder="Quantity"
                className="input w-full max-w-xl  input-info"
              />
              {/* <label className="label mt-4 label-xl">
                <span className="label-text">Last?</span>
              </label> */}
              <input
                type="text"
                defaultValue={picture_url}
                readOnly
                name="picture"
                placeholder="Picture"
                className="input w-full max-w-xl input-info mt-6"
              />
            </div>
          </div>
        </div>
        <label className="label label-xs">
          <span className="label-text">Your name?</span>
        </label>
        <textarea
          type="text"
          defaultValue={description}
          name="description"
          placeholder="Description"
          className="input input-bordered w-full h-24"
        ></textarea>
        <button type="submit" className="btn btn-wide w-full font-bold mt-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default ToyUpdate;

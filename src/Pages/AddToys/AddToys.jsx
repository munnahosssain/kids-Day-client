import React from "react";

const AddToys = () => {
  const handleAdded = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const picture = form.picture.value;
    const descriptions = form.descriptions.value;

    const updateData = {
      name,
      seller_name,
      seller_email,
      category,
      price,
      rating,
      quantity,
      picture,
      descriptions,
    };
    console.log(updateData);
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleAdded}>
        <div className="flex">
          <div>
            <div className="m-4">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input w-full max-w-xl input-info"
              />
              <label className="label mt-4">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
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
                name="seller_email"
                placeholder="Seller Email"
                className="input w-full max-w-xl input-info"
              />
              <input
                type="text"
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
                name="price"
                placeholder="Price"
                className="input w-full max-w-xl input-info"
              />
              <label className="label mt-4 label-xs">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
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
                name="quantity"
                placeholder="Quantity"
                className="input w-full max-w-xl  input-info"
              />
              {/* <label className="label mt-4 label-xl">
                <span className="label-text">Last?</span>
              </label> */}
              <input
                type="text"
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
          name="descriptions"
          placeholder="Descriptions"
          className="input input-bordered w-full h-24"
        ></textarea>
        <button type="submit" className="btn btn-wide w-full font-bold mt-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToys;

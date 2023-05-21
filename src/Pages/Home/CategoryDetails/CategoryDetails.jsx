import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useTitle from "../../../hooks/useTitle";

const CategoryDetails = () => {
  const categoryDetails = useLoaderData();

  useTitle("Category Details");

  return (
    <div>
      {categoryDetails.map(categoryDetail => (
        <div
          key={categoryDetail._id}
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content tex-center text-neutral-content">
            <div className="card lg:card-side bg-base-100 shadow-md">
              <LazyLoadImage
                src={categoryDetail.picture_url}
                delayTime={300}
                effect="blur"
                className="rounded-2xl p-6"
                alt="Toy picture"
              />
              <div className="card-body text-black my-16">
                <h2 className="card-title text-2xl">{categoryDetail.name}</h2>
                <p className="card-title">{categoryDetail.seller_email}</p>
                <p className="card-title">
                  Price: ${categoryDetail.price} Only
                </p>
                <StarRatings
                  rating={categoryDetail.rating}
                  starRatedColor="green"
                  numberOfStars={5}
                  name="rating"
                />
                <p className="card-title">
                  Only {categoryDetail.available_quantity} copies available
                </p>
                <p className="card-title">{categoryDetail.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;

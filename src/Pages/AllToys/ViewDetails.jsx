import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useTitle from "../../hooks/useTitle";

const ViewDetails = () => {
  const details = useLoaderData();
  const {
    name,
    picture_url,
    seller_email,
    price,
    rating,
    available_quantity,
    description,
  } = details;

  useTitle("View Details");

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content tex-center text-neutral-content">
        <div className="card lg:card-side bg-base-100 shadow-md">
          <LazyLoadImage
            src={picture_url}
            delayTime={300}
            effect="blur"
            className="rounded-2xl p-6"
            alt="Toy picture"
          />
          <div className="card-body text-black my-16">
            <h2 className="card-title text-2xl">{name}</h2>
            <p className="card-title">{seller_email}</p>
            <p className="card-title">Price: ${price} Only</p>
            <StarRatings
              rating={parseFloat(rating)}
              starRatedColor="green"
              numberOfStars={5}
              name="rating"
            />
            <p className="card-title">
              Only {available_quantity} copies available
            </p>
            <p className="card-title">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

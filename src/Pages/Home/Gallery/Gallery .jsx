// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://kids-day-server.vercel.app/gallery")
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="lg:py-48 bg-[#262626]">
      <div className="text-white text-center mb-12">
        <h1 className="gallery-header">Kids Gallery</h1>
        <p>Shop Kids Toys & Games Store goodies for your kids.</p>
      </div>
      <div className="items-center justify-center flex lg:mx-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-4">
          {photos.map(photo => (
            <div key={photo._id}>
              <div className="card lg:w-96 sm:w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={photo.image}
                    alt="gallery image"
                    className="rounded-xl"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

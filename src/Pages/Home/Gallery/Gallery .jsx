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
    <div className="bg-[#262626] ">
      <div className="my-48 bg-[#262626] items-center justify-center flex mx-24">
        <div className="grid grid-cols-4 gap-8">
          {photos.map(photo => (
            <div key={photo._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
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

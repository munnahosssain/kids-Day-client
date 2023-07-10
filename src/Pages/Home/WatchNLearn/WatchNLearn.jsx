import React from "react";

const WatchNLearn = () => {
  return (
    <div className="bg-red-200 h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-gray-500">
          <h1 className="text-4xl font-bold">Watch and Learn</h1>
          <p className="lg:px-96 mt-6">
            Watch some of our free educational toddler learn video including
            Gecko's Garage, popular nursery rhymes and Dr Poppy's pet rescue
          </p>
        </div>
        <div className="container">
          <div className="card">
            <div className="video-wrapper">
              <iframe
                title="Video Player"
                className="video-player"
                src="https://www.youtube.com/embed/mhHrZBTn4Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="card-title">
              Baby truck visit NEW geck's garden | Truck for children
            </h2>
          </div>
          <div className="card">
            <div className="video-wrapper">
              <iframe
                title="Video Player"
                className="video-player"
                src="https://www.youtube.com/embed/oxbKvpHBg4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="card-title">5 Little bases song</h2>
          </div>
          <div className="card">
            <div className="video-wrapper">
              <iframe
                title="Video Player"
                className="video-player"
                src="https://www.youtube.com/embed/0hXu2p_dgeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="card-title">
              Animal lullaby for toddlers with dr poppy
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchNLearn;

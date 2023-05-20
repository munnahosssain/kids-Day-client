import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyUpdate = () => {
  const updateToys = useLoaderData();
  console.log(updateToys);

  return (
    <div>
      <h1>ToyUpdate</h1>
    </div>
  );
};

export default ToyUpdate;

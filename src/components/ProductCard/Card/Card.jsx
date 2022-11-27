import React from "react";

const Card = () => {
  return (
    <div className="card w-96 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">Shoes!</h2>
        <p className="text-base-100">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <p className="text-base-100">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <p className="text-base-100">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-between">
          <button className="btn btn-accent">Book Now</button>
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

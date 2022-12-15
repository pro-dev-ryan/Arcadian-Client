import React from "react";

const Card = () => {
  const handleBook = (id) => {
    console.log(id);
  };
  const viewDetail = (id) => {
    console.log(id);
  };
  // const {
  //   name,
  //   brand,
  //   img,
  //   location,
  //   sellerName,
  //   op,
  //   rp,
  //   sold,
  //   type,
  //   description,
  //   _id,
  //   verify,
  // } = product;
  return (
    <div className="card md:w-96 shadow-xl image-full">
      <figure>
        <img src="" alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="text-sm font-heading p-1">
          {/* {verify ? "Verified Seller" : "Unverified Seller"} */}
        </div>
        <span className="badge badge-primary text-accent">Brand</span>
        <h5 className="text-accent">name</h5>
        <span className="bg-accent text-primary font-medium rounded-bl-2xl rounded-tr-2xl w-fit p-1 font-text">
          Seller: sellerName
        </span>
        <span className="text-base-100 rounded-bl-2xl rounded-tr-2xl w-fit p-1 text-xs font-link">
          Status:
          {/* {sold ? "sold" : "available"} */}
        </span>
        <p className="text-base-100 text-xl">Location: location</p>
        <p className="text-secondary">Type: type</p>
        <p className="text-secondary">Brand New Price: op $</p>
        <p className="text-secondary">Resale Price: rp $</p>
        <p className="text-base-100">description</p>
        <div className="card-actions justify-between">
          <button onClick={() => handleBook()} className="btn btn-accent">
            Book Now
          </button>
          <button onClick={() => viewDetail()} className="btn btn-secondary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

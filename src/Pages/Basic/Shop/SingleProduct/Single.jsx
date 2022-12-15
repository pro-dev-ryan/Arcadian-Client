import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { ContextAuthentication } from "../../../../Contexts/Context/AuthContext";
const Single = () => {
  const info = useLoaderData();
  const [userVerify, setUserVerify] = useState(false);
  const { user } = useContext(ContextAuthentication);
  const url = `https://arcadian-server.vercel.app/users?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserVerify(data?.verify))
      .catch((err) => console.log(err));
  }, []);
  const {
    adapter,
    name,
    brand,
    img,
    location,
    sellerName,
    op,
    rp,
    sold,
    type,
    description,
    _id,
    controller,
    release,
    using,
    booked,
  } = info?.result;

  return (
    <div className="md:m-5 mx-1 my-2">
      <h2>this is single</h2>
      <div className="flex md:flex-col justify-center flex-row gap-5 lg:mt-10">
        <Link
          className="bg-primary px-2 py-1 rounded-md cursor pointer w-fit"
          to={`/shop/category/${type}`}
        >
          Back to Category
        </Link>
        <Link
          className="bg-primary px-2 py-1 rounded-md cursor pointer w-fit"
          to="/shop"
        >
          Back to Shop
        </Link>
      </div>
      <div className="flex flex-col items-center lg:my-8 my-5">
        <figure className="md:w-1/2 lg:mb-5 mb-2">
          <img className="w-full object-contain h-80" src={img} alt={name} />
        </figure>
        <div className="md:w-1/2 mx-1">
          <div className="md:flex justify-between">
            <div>
              <span className="badge badge-primary text-accent">{brand}</span>
              <h3 className="text-primary">{name}</h3>
            </div>
            <div className="text-sm md:text-base font-heading p-1">
              {userVerify ? "Verified Seller" : "Unverified Seller"}
              <p className="bg-accent text-primary font-medium rounded-xl w-fit p-2 mt-2 font-text">
                Seller: {sellerName}
              </p>
            </div>
          </div>
          <span
            style={booked ? { color: "#f1ad25" } : { color: "inherit" }}
            className="text-neutral rounded-bl-2xl rounded-tr-2xl w-fit p-1 text-sm font-link"
          >
            {booked ? "booked" : "available"}
          </span>
          <div className="info my-2">
            <p className="text-neutral text-xl">Location: {location}</p>
            <p className="text-neutral">Type: {type}</p>
            <p className="text-neutral">Releasing-Year: {release} </p>
            <p className="text-neutral">Brand New Price: {op} $</p>
            <p className="text-neutral">Resale Price: {rp} $</p>
            <p className="text-neutral">Adapter: {adapter} </p>
            {type === "Tv-Console" && (
              <p className="text-neutral">controller: {controller} </p>
            )}
            <p className="text-neutral">Usage time: {using} </p>
          </div>
          <p className="text-primary">Description: {description}</p>
          <div className="card-actions justify-between">
            {booked === true || (
              <Link to={`/shop/book/${_id}`} className="btn-prime">
                Book Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;

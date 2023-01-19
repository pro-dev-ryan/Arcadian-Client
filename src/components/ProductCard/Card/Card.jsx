import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
import { motion as m } from "framer-motion";

const Card = ({ product, cardVariant }) => {
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
    booked,
  } = product;
  return (
    <m.div variants={cardVariant} className="card md:w-96 shadow-xl image-full">
      <div className="absolute hero-overlay rounded-xl bg-black opacity-70"></div>
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body px-2 lg:px-6">
        <div className="text-sm font-heading p-1">
          {userVerify ? "Verified Seller" : "Unverified Seller"}
        </div>
        <span className="badge badge-primary text-accent">{brand}</span>
        <h5 className="text-accent">{name}</h5>
        <span className="bg-accent text-primary font-medium rounded-bl-2xl rounded-tr-2xl w-fit p-1 font-text">
          Seller: {sellerName}
        </span>
        <span className="text-base-100 rounded-bl-2xl rounded-tr-2xl w-fit p-1 text-xs font-link">
          Status: {sold ? "sold" : "available"}
        </span>
        <span
          style={booked ? { color: "#f1ad25" } : { color: "inherit" }}
          className="text-base-100 rounded-bl-2xl rounded-tr-2xl w-fit p-1 text-xs font-link"
        >
          Booking: {booked ? "already booked" : "available"}
        </span>
        <p className="text-base-100 text-xl">Location: {location}</p>
        <p className="text-secondary">Type: {type}</p>
        <p className="text-secondary">Brand New Price: {op} $</p>
        <p className="text-secondary">Resale Price: {rp} $</p>
        <p className="text-base-100">{description}</p>
        <div className="card-actions justify-between">
          {booked === true || (
            <Link to={`/shop/book/${_id}`} className="btn-prime">
              <div className="p-2 cursor-pointer custom rounded-xl bg-[#572435]">
                Book Now
              </div>
            </Link>
          )}
          <Link
            to={`/shop/product/${_id}`}
            className="px-4 py-2 font-link lg:text-xl cursor-pointer font-bold bg-secondary rounded-xl capitalize text-primary  hover:text-primary hover:bg-[#f1ad25] transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </m.div>
  );
};

export default Card;

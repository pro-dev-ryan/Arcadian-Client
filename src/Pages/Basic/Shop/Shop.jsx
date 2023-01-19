import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../../components/ProductCard/Card/Card";
import useTitle from "../../../Hooks/useTitle";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  useTitle("Shop");
  const allproduct = useLoaderData();
  useEffect(() => {
    fetch(`https://arcadian-server.vercel.app/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const shopVariant = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: [0.2, 0.4, 0.6, 0.8, 1],
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };

  const cardVariant = {
    hide: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2 },
    },
  };

  const shopCard = allproduct?.result?.map((product, i) => (
    <Card cardVariant={cardVariant} key={i} product={product} />
  ));

  return (
    <m.div
      variants={shopVariant}
      initial="hide"
      whileInView="show"
      className="lg:mx-8 md:my-5 my-2 flex flex-col md:gap-5 gap-2"
    >
      <h2 className="mx-2">Show Room</h2>
      <div className="hidden lg:block bg-primary py-1 font-link">
        <ul>
          <li className="flex justify-center items-center gap-5">
            {categories?.map((category) => (
              <Link to={`/shop/category/${category.type}`} key={category._id}>
                {category?.type}
              </Link>
            ))}
          </li>
        </ul>
      </div>
      <m.div
        variants={cardVariant}
        initial="hide"
        whileInView="show"
        className="grid lg:grid-cols-3 md:grid-cols-2 mx-2 grid-cols-1 gap-4"
      >
        {shopCard}
      </m.div>
    </m.div>
  );
};

export default Shop;

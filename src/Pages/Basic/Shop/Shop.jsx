import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../../components/ProductCard/Card/Card";
import useTitle from "../../../Hooks/useTitle";
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

  return (
    <div className="lg:mx-8 md:my-5  my-2 flex flex-col md:gap-5 gap-2">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-2 grid-cols-1 gap-4">
        {allproduct?.result?.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

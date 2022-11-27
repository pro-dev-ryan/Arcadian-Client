import React from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink, useLoaderData } from "react-router-dom";
import Card from "../../../components/ProductCard/Card/Card";
import useTitle from "../../../Hooks/useTitle";

const Shop = () => {
  const [category, setCategory] = useState([]);
  const cat = useLoaderData();
  const handleCat = (data) => {
    console.log(data);
    axios.get(`http://localhost:5000/shop/${data}`).then((products) => {
      setCategory(products);
      console.log(products);
    });
  };
  useTitle("Shop");
  return (
    <div className="lg:mx-8 my-2 flex flex-col gap-4">
      <h2>this is Shop page</h2>
      <div className="bg-primary font-link">
        <ul className="flex justify-center items-center gap-5">
          {cat.map((category) => (
            <NavLink
              to={`http://localhost:5000/shop/${category?.type}`}
              key={category?._id}
            >
              {category?.type}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {category.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

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
<<<<<<< HEAD
    fetch(`https://arcadian-server.vercel.app/category`)
=======
    fetch(`http://localhost:5000/category`)
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
<<<<<<< HEAD
    <div className="lg:mx-8 md:my-5  my-2 flex flex-col md:gap-5 gap-2">
      <h2 className="mx-2">Show Room</h2>
      <div className="hidden lg:block bg-primary py-1 font-link">
=======
    <div className="lg:mx-8 my-2 flex flex-col gap-4">
      <h2>Show Room</h2>
      <div className="bg-primary font-link">
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
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
<<<<<<< HEAD
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-2 grid-cols-1 gap-4">
=======
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
        {allproduct?.result?.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

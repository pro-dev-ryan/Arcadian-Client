import React from "react";
<<<<<<< HEAD
import { Link, useLoaderData } from "react-router-dom";
=======
import { useLoaderData } from "react-router-dom";
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
import Card from "../../../../components/ProductCard/Card/Card";

const Category = () => {
  const data = useLoaderData();
  return (
    <div className="lg:mx-8 my-2 flex flex-col gap-4">
<<<<<<< HEAD
      <Link
        to="/shop"
        className="bg-primary px-2 py-1 rounded-md cursor pointer w-fit"
      >
        Back to Shop
      </Link>
=======
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      <h2>{data?.data}</h2>
      <h4>
        {data.result.length} {data.result.length > 1 ? "Consoles" : "Console"}
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
        {data?.result?.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;

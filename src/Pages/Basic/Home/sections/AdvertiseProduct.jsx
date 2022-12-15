import React from "react";
import Card from "../../../../components/ProductCard/Advertised/Card";
import { motion as m } from "framer-motion";

const AdvertiseProduct = ({ data }) => {
  return (
    <div>
      <div className="lg:mx-8 my-2 flex flex-col gap-4">
        <h2>Advertised Product</h2>
        <h4>
          {/* {data.result.length} {data.result.length > 1 ? "Consoles" : "Console"} */}
        </h4>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
          {data.result.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertiseProduct;

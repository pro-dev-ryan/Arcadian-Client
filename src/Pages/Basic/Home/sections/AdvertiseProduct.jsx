import React from "react";
import Card from "../../../../components/ProductCard/Advertised/Card";
import { motion as m } from "framer-motion";

const AdvertiseProduct = ({ data }) => {
  const textVariants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
  };

  const varyVariants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const childrenVariants = {
    hide: { opacity: 0, x: -500 },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  const adProduct = data.result.map((product, i) => (
    <Card key={i} childrenVariants={childrenVariants} product={product}></Card>
  ));

  return (
    <div>
      <div className="lg:mx-8 my-2 lg:my-16 flex flex-col gap-4">
        <m.h2
          variants={textVariants}
          initial="hide"
          when="beforeChildren"
          whileInView="show"
        >
          Advertised Product
        </m.h2>
        <m.div
          variants={varyVariants}
          initial="hide"
          whileInView="show"
          className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 mb-5"
        >
          {adProduct}
        </m.div>
      </div>
    </div>
  );
};

export default AdvertiseProduct;

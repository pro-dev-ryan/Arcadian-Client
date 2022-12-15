import React from "react";
import Card from "../../../components/ProductCard/ReportedCard/Card";
const ReportedProduct = () => {
  return (
    <div>
      <h4>Reported Product!!!</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5">
        {[...Array(4)].map((product, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default ReportedProduct;

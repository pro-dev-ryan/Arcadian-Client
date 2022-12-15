import React from "react";
<<<<<<< HEAD
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
=======

const ReportedProduct = () => {
  return (
    <div>
      <h4>Admin can delete reported Product!!!</h4>
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
    </div>
  );
};

export default ReportedProduct;

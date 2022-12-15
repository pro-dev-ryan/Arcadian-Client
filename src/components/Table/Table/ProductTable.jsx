import React from "react";
import ProductRow from "./Row/ProductRow";

<<<<<<< HEAD
const ProductTable = ({ products, refetch }) => {
=======
const ProductTable = ({ products }) => {
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
  const product = products?.result;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Avatar</th>
            <th>User/Product Name</th>
<<<<<<< HEAD
            <th>Booking</th>
            <th>Email/Location</th>
            <th>Status/Price</th>
            <th>Role/Type</th>
            <th>Advertised</th>
            <th>Delete</th>
=======
            <th>Email/Location</th>
            <th>Status/Price</th>
            <th>Role/Type</th>
            <th colSpan={4}>actions</th>
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
          </tr>
        </thead>
        <tbody>
          {product?.map((info, i) => (
<<<<<<< HEAD
            <ProductRow key={i} info={info} refetch={refetch} />
=======
            <ProductRow key={i} info={info} />
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

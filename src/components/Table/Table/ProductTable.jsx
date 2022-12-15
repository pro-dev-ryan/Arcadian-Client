import React from "react";
import ProductRow from "./Row/ProductRow";

const ProductTable = ({ products, refetch }) => {
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
            <th>Booking</th>
            <th>Email/Location</th>
            <th>Status/Price</th>
            <th>Role/Type</th>
            <th>Advertised</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((info, i) => (
            <ProductRow key={i} info={info} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

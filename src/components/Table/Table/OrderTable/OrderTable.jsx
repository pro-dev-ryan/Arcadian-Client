import React from "react";
import OrderRow from "../Row/OrderRow";

const OrderTable = ({ infos, handleDel }) => {
  return (
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
          <th>Product Name</th>
          <th>Price</th>
          <th>Contact</th>
          <th>Product ID</th>
          <th colSpan={2}>actions</th>
        </tr>
      </thead>
      <tbody>
        {infos ? (
          <h4 className="mt-2">You Don't Have a Booking Yet</h4>
        ) : (
          <>
            {infos?.map((info) => (
              <OrderRow key={info?._id} handleDel={handleDel} info={info} />
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default OrderTable;
//   <UserRow
//     key={i}
//     info={info}
//     handleDelete={handleDelete}
//     handleVerify={handleVerify}
//   />

import React from "react";

const OrderRow = ({ info, handleDel }) => {
  console.log(info);
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={info?.img ? info.img : "https://placeimg.com/80/80/people"}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>

      <td className="text-primary font-bold font-text lg:text-lg">
        {info?.pdName}
      </td>
      <td className="text-base font-text">{info?.price}</td>
      <td className="font-text lg:text-lg">{info?.contact}</td>
      <td className="text-base font-text">{info?.pdId}</td>
      <td colSpan={4}>
        <button
          onClick={() => handleDel(info?._id, info?.pdId)}
          className="btn btn-error btn-xs"
        >
          Delete
        </button>
        <button className=" ml-3 btn btn-accent btn-xs">Pay</button>
      </td>
    </tr>
  );
};

export default OrderRow;

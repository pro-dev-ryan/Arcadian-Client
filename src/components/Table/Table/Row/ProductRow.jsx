import React from "react";

const ProductRow = ({ info }) => {
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
          <div>
            <div className="font-bold">{info?.release}</div>
            <div
              style={!info?.sold ? { color: "white" } : { color: "#bdd9bf" }}
              className={
                "text-base font-text font-medium " +
                `${!info?.sold ? "badge badge-success" : "badge badge-error"}`
              }
            >
              {info?.sold ? "sold" : "available"}
            </div>
          </div>
        </div>
      </td>
      <td className="text-primary font-bold font-text lg:text-lg">
        {info?.name}
        <br />
        <span className="badge font-medium badge-primary badge-sm">
          {info?.brand}
        </span>
      </td>
      <td className="text-base font-semibold">{info?.location}</td>
      <td className="text-base font-text">{info?.rp}</td>
      <td className="text-base font-text">{info?.type}</td>
      <td>
        <button
          onClick={() => handleDelete(info?._id)}
          className="btn btn-accent btn-xs"
        >
          Advertise
        </button>
        {/* <button className="btn btn-ghost btn-xs">details</button> */}
      </td>
    </tr>
  );
};

export default ProductRow;

import React from "react";

const Row = ({ info, handleDelete }) => {
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
                src={info?.url ? info.url : "https://placeimg.com/80/80/people"}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            {/* <div className="font-bold">{info?.name}</div> */}
            {/* <div className="text-sm opacity-50">{info?.}</div> */}
          </div>
        </div>
      </td>
      <td className="text-primary font-bold font-text lg:text-lg">
        {info?.name}
        <br />
        {/* <span className="badge badge- badge-sm">
          Desktop Support Technician
        </span> */}
      </td>
      <td>{info?.email}</td>
      <th style={info?.verify ? { color: "green" } : { color: "crimson" }}>
        <button className="btn btn-ghost btn-xs">
          {info?.verify ? "verified" : "unverified"}
        </button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">{info?.role}</button>
      </th>
      <th>
        <button
          onClick={() => handleDelete(info?._id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
        {/* <button className="btn btn-ghost btn-xs">details</button> */}
      </th>
    </tr>
  );
};

export default Row;

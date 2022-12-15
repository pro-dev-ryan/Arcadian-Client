import React from "react";
import { toast } from "react-hot-toast";
const ProductRow = ({ info, refetch }) => {
  const handleAdvert = (id) => {
    fetch(`https://arcadian-server.vercel.app/product?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorization: `${localStorage.getItem("userTicket")}`,
      },
      body: JSON.stringify({ advertise: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.status) {
          refetch();
          toast.success(`${data?.message}`);
        }
      })
      .catch((err) => {
        toast.error(`${data?.message}`);
      });
  };

  const handleDel = (id) => {
    const url = `https://arcadian-server.vercel.app/deleteproduct?id=${id}`;
    const headers = {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem("userTicket")}`,
    };
    fetch(url, { method: "DELETE", headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.status) {
          refetch();
          toast.success(`${data?.message}`);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${data?.message}`);
      });
  };
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
      <td className="text-base font-text">{info?.booked ? "Yes" : "No"}</td>
      <td className="text-base font-semibold">{info?.location}</td>
      <td className="text-base font-text">{info?.rp}</td>
      <td className="text-base font-text">{info?.type}</td>
      <td>
        {!info?.advertise ? (
          <button
            disabled={info?.booked ? true : false}
            onClick={() => handleAdvert(info?._id)}
            className="btn btn-accent btn-xs"
          >
            Advertise
          </button>
        ) : (
          <span className="badge badge-accent badge-sm p-3">Advertised</span>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDel(info?._id)}
          className="btn btn-error btn-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;

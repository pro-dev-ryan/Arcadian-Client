import axios from "axios";
import React from "react";
<<<<<<< HEAD
import { MdOutlineWarning, MdVerifiedUser } from "react-icons/md";
// import { VscUnverified } from "react-icons/vsc";
import { useState } from "react";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductTable from "../../../components/Table/Table/ProductTable";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
import Loader from "../../../components/Loader/Loader";
import toast from "react-hot-toast";

const AllProduct = () => {
  const [verify, setVerify] = useState({});
  const { user } = useContext(ContextAuthentication);
  const headers = {
    "content-Type": "application/json",
    authorization: `${localStorage.getItem("userTicket")}`,
  };
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allproducts"],
    queryFn: async () =>
      await axios.get(
        `https://arcadian-server.vercel.app/allproducts?email=${user?.email}`
      ),
  });
  axios
    .get(`https://arcadian-server.vercel.app/dashboard/seller/verify`, {
      headers,
    })
    .then((data) => {
      if (data?.data?.status) {
        setVerify(data?.data?.result);
      }
    })
    .catch((err) => console.log(err));
  const products = data?.data;
=======
import {
  MdOutlineWarning,
  MdVerifiedUser,
  MdWarningAmber,
} from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { useState } from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import ProductTable from "../../../components/Table/Table/ProductTable";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";

const AllProduct = () => {
  const [verify, setVerify] = useState("");
  const { user } = useContext(ContextAuthentication);
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => await axios.get("http://localhost:5000/allproducts"),
  });
  axios
    .get(`http://localhost:5000/dashboard/seller/verify/${user?.email}`)
    .then((data) => setVerify(data.data.status));

  const products = data?.data;

>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
  const verified = (
    <div className="badge bg-blue-600 border-none p-3 text-lg font-Text">
      Verified <span className="ml-1">{<MdVerifiedUser />}</span>
    </div>
  );
  const unverified = (
    <div className="badge bg-red-400 border-none p-3 text-lg font-semibold font-Text">
      Unverified <span className="ml-1">{<MdOutlineWarning />}</span>
    </div>
  );

<<<<<<< HEAD
  if (isLoading) {
    return <Loader />;
  }
  const verifyMe = (e) => {
    e.preventDefault();
    fetch("https://arcadian-server.vercel.app/users", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorization: `${localStorage.getItem("userTicket")}`,
      },
      body: JSON.stringify({ approval: true }),
    })
      .then((res) => res.json())
      .then((data) => toast("verify approval sent"))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h4>{user?.displayName}'s Inventory</h4>
      <div>
        {verify?.verify ? verified : unverified}
        {verify?.approval && (
          <span className="ml-5">Wait for the Admin Approval</span>
        )}
        {!verify?.approval && !verify?.verify && (
          <button className="mx-3 mt-2 btn-prime " onClick={verifyMe}>
            Verify Now
          </button>
        )}
      </div>

      <div className="mt-3">
        <ProductTable products={products} refetch={refetch} />
=======
  return (
    <div>
      <h4>{user?.displayName}'s Inventory</h4>
      <div>{verify ? verified : unverified}</div>
      <div className="mt-3">
        <ProductTable products={products} />
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      </div>
    </div>
  );
};

export default AllProduct;

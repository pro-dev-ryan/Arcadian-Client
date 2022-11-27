import axios from "axios";
import React from "react";
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

  return (
    <div>
      <h4>{user?.displayName}'s Inventory</h4>
      <div>{verify ? verified : unverified}</div>
      <div className="mt-3">
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default AllProduct;

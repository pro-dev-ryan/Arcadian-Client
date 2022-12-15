import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import Loader from "../../../components/Loader/Loader";
import OrderTable from "../../../components/Table/Table/OrderTable/OrderTable";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
import { toast } from "react-hot-toast";

const MyOrders = () => {
  const { user } = useContext(ContextAuthentication);
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () =>
      await axios.get(
        `https://arcadian-server.vercel.app/userbooking?email=${user?.email}`,
        { headers: { authorization: `${localStorage.getItem("userTicket")}` } }
      ),
  });
  const infos = data?.data?.result || {};

  const handleDel = (id, pdId) => {
    const url = `https://arcadian-server.vercel.app/deletebooking?id=${id}&&pdid=${pdId}`;
    const headers = {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem("userTicket")}`,
    };
    fetch(url, { method: "DELETE", headers })
      .then((res) => res.json())
      .then((data) => {
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

  {
    isLoading && <Loader />;
  }
  return (
    <div>
      <h3>user orders will be here</h3>
      <div>
        <OrderTable infos={infos} handleDel={handleDel} />
      </div>
    </div>
  );
};

export default MyOrders;

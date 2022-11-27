import React from "react";
import Loader from "../../../components/Loader/Loader";
import { useQuery } from "react-query";
import axios from "axios";
import Table from "../../../components/Table/Table/Table";
const AllUsers = () => {
  const headers = { authorization: `${localStorage.getItem("userTicket")}` };
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () =>
      await axios.get("http://localhost:5000/dashboard/admin/alluser", {
        headers,
      }),
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h4>Admin sees all the users here!!</h4>
      <div>
        <Table data={data?.data} />
      </div>
    </div>
  );
};

export default AllUsers;

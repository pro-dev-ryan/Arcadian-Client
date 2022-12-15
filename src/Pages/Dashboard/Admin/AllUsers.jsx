import React from "react";
import Loader from "../../../components/Loader/Loader";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Table from "../../../components/Table/Table/Table";
import { useContext } from "react";
import { ContextAuthentication } from "../../../Contexts/Context/AuthContext";
const AllUsers = () => {
  const { user } = useContext(ContextAuthentication);
  const headers = { authorization: `${localStorage.getItem("userTicket")}` };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () =>
      await axios.get(
        "https://arcadian-server.vercel.app/dashboard/admin/alluser",
        {
          headers,
        }
      ),
  });

  const handleDelete = (id) => {
    const url = `https://arcadian-server.vercel.app/dashboard/admin/${user?.email}/delete?id=${id}`;
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

  const handleVerify = (id) => {
    fetch(
      `https://arcadian-server.vercel.app/dashboard/admin/${user?.email}?id=${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: `${localStorage.getItem("userTicket")}`,
        },
        body: JSON.stringify({ approval: false }),
      }
    )
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

=======
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
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h4>Admin sees all the users here!!</h4>
      <div>
<<<<<<< HEAD
        <Table
          data={data?.data}
          handleDelete={handleDelete}
          handleVerify={handleVerify}
        />
=======
        <Table data={data?.data} />
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      </div>
    </div>
  );
};

export default AllUsers;

import React from "react";
<<<<<<< HEAD
import { useContext } from "react";
import { ContextAuthentication } from "../../Contexts/Context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  const [info, setInfo] = useState({});
  const { user } = useContext(ContextAuthentication);
  useEffect(() => {
    axios
      .get(`https://arcadian-server.vercel.app/loginuser?email=${user?.email}`)
      .then((userInfo) => {
        setInfo(userInfo?.data?.result);
      });
  }, [user?.email]);

  return (
    <div>
      <h3>{info?.role}'s DashBoard</h3>
      <div className="flex flex-col items-center justify-center">
        <h2 className="lg:py-12">Hello Mr. {info?.name}</h2>
        {info?.role !== "admin" && (
          <h4>
            What are you gonna {info?.role === "seller" ? "Sell" : "Buy"} today?
          </h4>
        )}
=======
import Table from "../../components/Table/Table/Table";
import { Query } from "../../Functions/GetQuery";

const Dashboard = () => {
  const email = "sam@son.com";
  Query("testpost", email);
  return (
    <div>
      <h3>This is DashBoard</h3>
      <div>
        <Table />
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
      </div>
    </div>
  );
};

export default Dashboard;

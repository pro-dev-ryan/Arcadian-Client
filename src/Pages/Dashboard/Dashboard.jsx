import React from "react";
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
      </div>
    </div>
  );
};

export default Dashboard;

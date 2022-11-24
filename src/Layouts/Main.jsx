import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Basic/Shared/Footer/Footer";
import Navbar from "../Pages/Basic/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { ContextAuthentication } from "../../Contexts/Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(ContextAuthentication);
  const location = useLocation();
  if (loader) {
    return <Loader />;
  }
  if (user && user?.email) {
    console.log("working");
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ContextAuthentication } from "../../Contexts/Context/AuthContext";

const PrivateRoute = () => {
  const { user, loader } = useContext(ContextAuthentication);
  const location = useLocation();
  if (loader) {
    return;
  }
  return <div></div>;
};

export default PrivateRoute;

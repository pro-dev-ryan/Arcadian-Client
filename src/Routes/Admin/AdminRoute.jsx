import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { ContextAuthentication } from "../../Contexts/Context/AuthContext";
import useVerifyAdmin from "../../Hooks/useVerifyAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(ContextAuthentication);
  const [confirm, adminLoad] = useVerifyAdmin(user?.email);

  if (loader || adminLoad) {
    return <Loader />;
  }
  if (user && confirm) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default AdminRoute;

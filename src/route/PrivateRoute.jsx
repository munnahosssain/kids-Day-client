// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Shared/Loading/loading";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  // if (!user) {
  //   swal({
  //     title: "Good job!",
  //     text: "You clicked the button!",
  //     icon: "success",
  //   });
  //   return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
  // }
  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRoute;

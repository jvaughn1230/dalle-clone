import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const route = user ? <Outlet /> : <Navigate to="login" />;

  return route;
};

export default ProtectedRoutes;

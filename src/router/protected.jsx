import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./helper";

const Protected = () => {
  const isLogin = localStorage.getItem("role");
  return isLogin ? <Outlet /> : <Navigate to={routes.LOGIN} />;
};

export default Protected;

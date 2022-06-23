import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivetRouter = ({ children, ...rest }) => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />;
};

const PublicRouter = ({ children, ...rest }) => {
  return localStorage.getItem("token") ? <Navigate to="/Table" /> : <Outlet />;
};
export { PrivetRouter, PublicRouter };

import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateForClient = ({ children }) => {

  if (localStorage.getItem("role") === null) {
    return <Navigate to={{ pathname: "/" }} />;
  }
  const user = localStorage.getItem("role");
  if (user !== "Client") {
    return <Navigate to={{ pathname: "/client" }} />;
  } else {
    return children;
  }
};
export default PrivateForClient
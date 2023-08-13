import React from 'react'
import { Navigate } from 'react-router-dom';

// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split(".")[1]));
//   } catch (e) {
//     return null;
//   }
// };
const ProtectedRoute = ({ children }) => {
    // const pathn = useLocation()
  //debugger;
  if (localStorage.getItem("massage-token") === null) {
    return <Navigate to={{ pathname: "/" }} />;
  }
  const user = localStorage.getItem("massage-token");
//   console.log(parseJwt(user))
  if (user.exp * 1000 < Date.now()) {
    return <Navigate to={{ pathname: "/" }} />;
  } else {
    return children;
  }
};


export default ProtectedRoute
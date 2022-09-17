import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
// const { user } = useUserAuth();
const ProtectedRoute = ({ children }) => {

   const { user } = useUserAuth();
console.log(user, "protected route user")
   if (!user ) {
      return <Navigate to="/accounts/login" ></Navigate>;
   }
   if (!user.username) {
      
   }
   return children;
};

export default ProtectedRoute;
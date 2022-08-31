import { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"

function ProtectedRouter({ children }:any) {
  const {user, loading} = useAuth();

  if (loading) return <h1>Loading</h1>
  if(!user) return <Navigate to="/login" />

  return <>{children}</>

}

export default ProtectedRouter;
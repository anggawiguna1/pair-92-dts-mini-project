import {
    Box,
    CircularProgress,
  } from "@mui/material";
  import React from "react";
  import { useAuthState } from "react-firebase-hooks/auth";
  import { Navigate } from "react-router-dom";
  import { auth } from "../config/firebase";
  
  const ProtectedComponent = ({ children }) => {
    const [user, isLoading] = useAuthState(auth);
  
    if (isLoading) {
      return (
        <Box
          sx={{
            backgroundColor: "black",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      );
    }
  
    if (user) {
      return children;
    }
  
    return <Navigate to="/signin"/>;
  };
  
  export default ProtectedComponent;
  
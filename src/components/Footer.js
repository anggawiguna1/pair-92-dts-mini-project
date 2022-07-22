import React from "react";

import { Box, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box style={{ height: "1em" }}>
      <Toolbar
        style={{
          backgroundColor: "#E50913",
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Typography component="div" style={{ color: "white" }}>
          &copy; Copyright 2022
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
import { Box } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import NavBar from "./nav";
import NowPlayingBar from "./playingBar";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <NowPlayingBar/>
      <Box sx={{ 
        // paddingTop: 10, 
        marginLeft: "240px",
        color: 'white' }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;

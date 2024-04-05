import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import digitalFlake from "../images/logo/digitalFlake.png";

// custom image for company logo
const Image = styled("img")({
  width: "30px",
  height: "30px",
});

//main function or component
const AdminPage = () => {
  //main return function
  return (
    // jsx element wrapper
    <>
      {/* main container */}
      <Container
        sx={{
          height: "100vh",
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* box container for content */}
        <Box textAlign="center">
          <Image src={digitalFlake} alt="digital flake logo" />
          <Typography variant="h3">
            <strong>Digital</strong>flake
          </Typography>
          <Typography variant="body1">Welcome to Digitalflake Admin</Typography>
        </Box>
      </Container>
    </>
  );
};

export default AdminPage;

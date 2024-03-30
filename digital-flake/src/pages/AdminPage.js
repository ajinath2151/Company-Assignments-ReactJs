import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import digitalFlake from "../images/logo/digitalFlake.png";

const Image = styled("img")({
  width: "30px",
  height: "30px",
});

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const AdminPage = () => {
  return (
    <>
      <Container
        sx={{
          height: "86vh",
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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

import React from "react";
import { Typography } from "@mui/material";
import digitalFlake from "../images/logo/digitalFlake.png";
import { Box, styled, Avatar } from "@mui/material";
const Image = styled("img")({
  width: "30px",
  height: "30px",
});

const Product = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px dashed grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          backgroundColor: "purple",
          color: "#FFFFFF",
          marginTop: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={digitalFlake}
            alt="digital flake logo"
            
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <strong>Digital</strong>flake
          </Typography>
        </div>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </Box>
      <Typography variant="h1">Product Page</Typography>
    </>
  );
};

export default Product;

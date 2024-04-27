import React, { useState } from "react";
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, styled } from "@mui/material";
import { Menu as Menubar } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link from React Router
import digitalFlake from "../images/logo/digitalFlake.png";
import LoginPage from "./LoginPage";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 

const Image = styled("img")({
  width: "30px",
  height: "30px",
});

const Navbar = (props) => {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = ["Product", "Contact", "Block", "Services"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleLogout = () => {
    // Handle logout logic here
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    if(setting==='Logout') {
      props.onLogin();
      navigate("/logout");
    }
  };

  return (
    <>
      
        <AppBar sx={{ position: "fixed" }}>
          <Container maxWidth={"xl"}>
            <Toolbar disableGutters>
              <Image src={digitalFlake} alt="digital flake logo" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontFamily: "monospace", color: "inherit", textDecoration: "none" }}>
                <strong>Digital</strong>flake
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                  <Menubar />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left" }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography component={Link} to={`/${page.toLowerCase()}`} variant="body1" color="inherit" sx={{ textDecoration: "none" }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1, fontFamily: "monospace", color: "inherit", textDecoration: "none" }}>
                <strong>Digital</strong>flake
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button key={page} component={Link} to={`/${page.toLowerCase()}`} sx={{ my: 2, color: "white", display: "block" }}>{page}</Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu sx={{ mt: "45px"}} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: "top", horizontal: "right" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={Boolean(anchorElUser)} onClose={() => handleCloseUserMenu(null)}>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                      {/* <Typography textAlign="center">{setting}</Typography> */}
                      {/* <Button key={setting}  sx={{ my: 2, color: "white", display: "block" }}>{setting}</Button> */}
                      <Button key={setting} component={Link} to={`/${setting.toLowerCase()}`} sx={{ my: 2, color: "black", display: "block" }}>{setting}</Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </>
  );
};

export default Navbar;

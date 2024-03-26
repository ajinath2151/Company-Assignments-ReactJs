import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import digitalFlake from '../images/logo/digitalFlake.png';
import { Menu as Menubar } from '@mui/icons-material';


const Image = styled('img')({
  width:'30px',
  height:'30px'
})

//for menu items
const pages = ['Product', 'pricing', 'Block'];
// for user profile
const settings = ['profile', 'account', 'Dashboard', 'Logout']
const Navbar = () => {

  // usestate for menu items
  const [anchorElNav , setAnchorElNav] = useState(null);
  // usestate for user profile
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  
  // for munu items
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  // for munu items
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }
  // for user profile i.e. logout dashboard ...
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }  
  // for user profile i.e. logout dashboard ...
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }


  return (
    <>
    {/* main app bar for admin page */}
    <AppBar position='static'>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters>
          {/* <img src={digitalFlake} alt="digital flake logo" /> */}
          <Image src={digitalFlake} alt="digital flake logo" sx={{display:{xs:'none', md:'flex'},mr:1}} />
          {/* for Digitalflake name of toolbar / appbar */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',              
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <strong>Digital</strong>flake
          </Typography>
            {/* for whole icons on the menu button */}
          <Box sx={{flexGrow:1, display:{xs:'flex',md:'none'}}}>
            {/* for munu icon button */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* menu icon for small screen */}
              <Menubar />
            </IconButton>
            {/* for munu items   */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
                            
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <strong>Digital</strong>flake
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          {/* for user profile i.e. logout dashboard ... */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>    
    </AppBar>             
    </>
  )
}

export default Navbar

import { GridView } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),    
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const CategoryPage = () => {
  return (
    <>
      <Container>
        <Box sx={{display:'flex', alignItems:'center', paddingTop:2, justifyContent:'space-between', paddingBottom:2}}>
          
          <div style={{display:'flex', alignItems:'center'}}>
          <GridView />
          <Typography sx={{fontSize:'20px', marginLeft:'20px'}} variant='body1'><strong>Category</strong></Typography>
          </div>

          <Search>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button variant='contained' sx={{marginRight:'20px'}}>Add New</Button>
        </Box>
      </Container>
    </>
  )
}

export default CategoryPage

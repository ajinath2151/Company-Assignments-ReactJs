import React from "react";
import Navbar from "./pages/Navbar";
import Leftbar from "./pages/Leftbar";
import AdminPage from "./pages/AdminPage";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

const Homepage = () => {

  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={3} md={2}>
          <Item>
            <Leftbar />
          </Item>
        </Grid>        
      </Grid>
    </div>
  );
};

export default Homepage;

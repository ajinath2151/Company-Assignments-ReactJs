import { Grid, Paper, styled } from "@mui/material";
import React from "react";
import '../pages/AdminPage.css';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: theme.palette.mode === "dark" ? "#9fb8d6" : "#c5d3e3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdminPage = () => {
  return (
    <div>
      
      <Grid container>
        <Grid item xs={2} md={3}>
          <Item>
          content
          </Item>
        </Grid>
        <Grid item xs={10} md={9}>
          <Item sx={{textAlign:'left'}}>content</Item>
        </Grid>        
      </Grid>
    </div>
  );
};

export default AdminPage;

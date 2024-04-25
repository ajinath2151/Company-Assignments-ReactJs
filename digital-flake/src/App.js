import "./App.css";
import Navbar from "./pages/Navbar";
import Leftbar from "./pages/Leftbar";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import { Grid, Paper } from "@mui/material";
import styled from "styled-components";
import Test from "./pages/Test";

const Item = styled(Paper)(({ theme }) => ({}));

function App(props) {
  return (
    <>    
      <LoginPage />
      {/* <Test /> */}
      {/* <Navbar /> */}
      {/* for all pages of dashboard use grid system / container and maintain specs in window */}
      <Grid container>
        <Grid item xs={2} md={3}>
          <Item
            sx={{
              backgroundColor: "red",
              position: "fixed",
              width: { md: "25%", xs: "19%" },
            }}
          >
            {/* <Leftbar /> */}
          </Item>
        </Grid>
        <Grid item xs={10} md={9}>
          <Item>
            {/* <AdminPage /> */}
          </Item>
          <Item>
            {/* <CategoryPage /> */}
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

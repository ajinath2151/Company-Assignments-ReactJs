import "./App.css";
import Navbar from "./pages/Navbar";
import Leftbar from "./pages/Leftbar";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import { Grid, Paper } from "@mui/material";
import styled from "styled-components";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      {/* <LoginPage />     */}
      <Navbar />
      {/* <Leftbar />     */}
      {/* <Leftbar01 /> */}
      {/* <AdminPage /> */}

      <Grid container>
        <Grid item xs={2} md={3}>
                                                                        
          <Item sx={{ backgroundColor: "red", position:'fixed', width:'25%', top:{xs:'13%', md:'69px'},}}>
            <Leftbar />
          </Item>
        </Grid>
        <Grid item xs={10} md={9}>
          <Item sx={{ backgroundColor: "yellow" }}>
            <AdminPage />            
          </Item>
          <Item sx={{ backgroundColor: "#95F9EA" }}>
            <CategoryPage />
          </Item>
        </Grid>        

      </Grid>
        
    </>
  );
}

export default App;

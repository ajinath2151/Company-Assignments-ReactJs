import './App.css';
import Navbar from './pages/Navbar';
import Leftbar from './pages/Leftbar';
import CategoryPage from './pages/CategoryPage';
import AdminPage from './pages/AdminPage';
import Leftbar01 from './pages/Leftbar01';
import { Grid, Paper } from '@mui/material';
import styled from 'styled-components';



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
  <Grid item xs={3} md={3}>
    <Item sx={{backgroundColor:'red'}}><Leftbar /></Item>
  </Grid>
  <Grid item xs={9} md={9}>
    <Item sx={{backgroundColor:'yellow'}}><AdminPage /></Item>
  </Grid>
 
    <CategoryPage />
</Grid>

    
    </>
  );
}

export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Leftbar from "./pages/Leftbar";
import AdminPage from "./pages/AdminPage";
import Block from "./pages/Block";
import CategoryPage from "./pages/CategoryPage";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Homepage from "./Homepage";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Grid container>
        {isLoggedIn && (
          <Grid item xs={12}>
            <Item>
              <Navbar onLogin={handleLogin} />
            </Item>
          </Grid>
        )}
        <Grid item xs={3} md={3}>
          {isLoggedIn && (
            <Item>
              <Leftbar />
            </Item>
          )}
        </Grid>
        <Grid item xs={9} md={9}>
          <Item>
            <Routes>
              <Route
                path="/"
                element={<LoginPage onLogin={handleLogin} />}
              />
              {
                
                isLoggedIn && <> <Route path="/adminPage" element={<AdminPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              </>
            }
              <Route
                path="/loginPage"
                element={<LoginPage onLogin={handleLogin} />}
              />
              <Route
                path="/admin/*"
                element={isLoggedIn ? <AdminComponents /> : ""}
              />
            </Routes>
          </Item>
        </Grid>
      </Grid>
    </Router>
  );
};

function AdminComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/block" element={<Block />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;

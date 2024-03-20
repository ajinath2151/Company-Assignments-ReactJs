import React, { Fragment } from "react";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import digitalFlake from "../images/logo/digitalFlake.png";
import BI from "../images/background/login.png";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Styled Container for div style
const TopDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  // height: '100vh', // Set height to viewport height for full-screen centering
});

const LoginPage = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container style={{marginTop:50}}>
      <Fragment>
        <Paper
          style={{
            height: 500,
            width: 400,
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl>
            {/* <FormControl style={{border:'1px solid black', height:'250px'}}> */}
            <TopDiv>
              <img src={digitalFlake} alt="company logoImage" />
              <Typography sx={{ textAlign: "center" }} variant="h3">
                <strong>Digital</strong>flake
              </Typography>
              <Typography sx={{ textAlign: "center" }} variant="h5">
                Welcome to Digitalflake Admin
              </Typography>
            </TopDiv>
            <TextField                          
              id="outlined-required"
              label="Email ID"
              type="email"              
              autoComplete="current-password"
              style={{marginTop:20, marginBottom:20}}
              />
             {/* <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"                            
              style={{marginTop:20}}            
            /> */}
            <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              
              />
          <Link style={{position:'absolute', right:0, top:74, textDecoration:'none'}}>Forgot password?</Link>
          </FormControl>

          <Button style={{marginTop:60, background:'purple'}} variant="contained">Contained</Button>
          </FormControl>          
        </Paper>
      </Fragment>
    </Container>
  );
};

export default LoginPage;

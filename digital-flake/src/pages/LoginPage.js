import React, { Fragment, useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";

// Styled Container for div style
const TopDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  // height: '100vh', // Set height to viewport height for full-screen centering
});
//component name LoginPage
const LoginPage = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState(""); // State variable to hold email address

  // useState for open dialog box on click of forget / forgot password
  const [open, setOpen] = useState(false);

  // for open dialog box onClick of forgot Password
  const handleClickOpen = (e) =>{
    e.preventDefault();
    setOpen(true)        
  }
  // for close dialog box onClick of cancel inside forgot Password link dialog box
  const handleClose = () =>{
    setOpen(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const emailValue = formJson.email;
    setEmail(emailValue); // Store the email address in state
    console.log(emailValue);
    handleClose();
    alert("password link sent to your email")
    // if (emailValue!="") {
    //   alert("password link sent to your email")
    // }
  };

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
              {/* <Link style={{position:'absolute', right:0, top:74, textDecoration:'none'}} onClick={()=>{alert("this is password change root")}}>Forgot password?</Link> */}
              <Link style={{position:'absolute', right:0, top:74, textDecoration:'none'}} onClick={handleClickOpen}>Forgot password?</Link>
              <Dialog              
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: 'form',
                  onSubmit : handleSubmit,            
                }}          
              >
                <DialogTitle sx={{color:'purple',textAlign:'center'}}>Did you forget your password?</DialogTitle>
                <DialogContent>
                  <DialogContentText sx={{paddingBottom:0}}>
                    Enter your email address and we'll send you a link to reset password
                  </DialogContentText>     
                  {/* forget password dialog box email id      */}
                  <TextField
                    label="Email address"
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    required
                  />
                </DialogContent>
                  <Button type="submit" variant="" fullWidth sx={{height:50, background:'#753081', color:'white', marginTop:2}}>Request reset link</Button>
                  <Button onClick={handleClose} sx={{display:'flex',justifyContent:'center'}}>Back to login</Button>
                <DialogActions>
                </DialogActions>
              </Dialog>
            </FormControl>

            <Button style={{marginTop:60, background:'purple'}} variant="contained">Contained</Button>
          </FormControl>          
        </Paper>
      </Fragment>
    </Container>
  );
};

export default LoginPage;

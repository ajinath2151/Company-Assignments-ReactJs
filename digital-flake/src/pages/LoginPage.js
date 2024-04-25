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
  Link,
  Paper,
  Typography,
} from "@mui/material";
import digitalFlake from "../images/logo/digitalFlake.png";
import TextField from "@mui/material/TextField";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import "./LoginPage.css";

import Leftbar from "./Leftbar";
import AdminPage from "./AdminPage";
import CategoryPage from "./CategoryPage";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";

import { useFormInputValidation } from "react-form-input-validation";

const Item = styled(Paper)(({ theme }) => ({}));

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
  //for validation
  const [fields, errors, form] = useFormInputValidation(
    {
      email: "",
      password: "",
    },
    {
      email: "required|email",
      password: "required|between:8,12",
    }
  );

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      event.preventDefault();
      const emailValue = document.getElementById("emailIdLoginPage").value;
      const passwordValue = document.getElementById("passwordLoginPage").value;

      if (!emailValue || !passwordValue) {
        // alert("Please fill in both email and password fields.");
      } else {
        // Proceed with login logic
        // alert("Login");
        if (show === true) {
          setShow(false);
        } else {
          setShow(true);
        }
      }
      // console.log(fields, errors);
      // Perform api call here
    }
  };
  // show/hide password on click of eya icon
  // const [showPassword, setShowPassword] = React.useState(false);
  // for email inside forget Password combo box
  // const [email, setEmail] = useState(""); // State variable to hold email address
  // useState for open dialog box on click of forget / forgot password
  const [open, setOpen] = useState(false);

  // for showing the AddNewCategory component
  const [show, setShow] = useState(false);

  // for open dialog box onClick of forgot Password
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  // for close dialog box onClick of cancel inside forgot Password link dialog box
  const handleClose = () => {
    setOpen(false);
  };

  // for email inside forget Password combo box
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const emailValue = formJson.email;
    // setEmail(emailValue); // Store the email address in state
    console.log(emailValue);
    handleClose();
    alert("password link sent to your email");
    // if (emailValue!="") {
    //   alert("password link sent to your email")
    // }
  };

  // for show / hide password on click of eye icon of password
  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // for prevent default password on click of eye icon of password
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const emailValue = document.getElementById("emailIdLoginPage").value;
  //   const passwordValue = document.getElementById("passwordLoginPage").value;

  //   if (!emailValue || !passwordValue) {
  //     alert("Please fill in both email and password fields.");
  //   } else {

  //     alert("Login");

  //     if (show === true) {
  //       setShow(false);
  //     } else {
  //       setShow(true);
  //     }
  //   }
  // };

  return (
    <>
      {/* all data of LoginPage will be return / available under this container */}
      {!show ? (
        <Container id="myid" style={{ marginTop: 50 }}>
          <Fragment>
            {/* define paper size for show data */}
            <Paper
              style={{
                height: 500,
                width: 400,
                border: "2px solid black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* inside FormControl having all controls of form like TextField label and all */}
              <FormControl>
                {/* <FormControl style={{border:'1px solid black', height:'250px'}}> */}
                {/* the content above textfield is in top div */}
                <TopDiv>
                  <img src={digitalFlake} alt="company logoImage" />
                  <Typography sx={{ textAlign: "center" }} variant="h3">
                    <strong>Digital</strong>flake
                  </Typography>
                  <Typography sx={{ textAlign: "center" }} variant="h5">
                    Welcome to Digitalflake Admin
                  </Typography>
                </TopDiv>
                <FormControl style={{ width: 300 }}>
                  <div>
                    <form
                      className="myForm"
                      noValidate
                      autoComplete="off"
                      onSubmit={onSubmit}
                    >
                      <TextField
                        id="emailIdLoginPage"
                        required
                        label="Email ID"
                        name="email"
                        type="text"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.email}
                        data-attribute-name="email"
                        autoComplete="current-password"
                        style={{
                          marginTop: 20,
                          width: "95%",
                        }}
                      />
                      <label className="error">
                        {errors.email ? errors.email : ""}
                      </label>
                      <p>
                        <TextField
                          id="passwordLoginPage"
                          required
                          label="Password"
                          name="password"
                          type="password"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.password}
                          data-attribute-name="password"
                          autoComplete="current-password"
                          style={{
                            marginTop: 5,
                            marginBottom: 10,
                            width: "95%",
                          }}
                        />

                        <label className="error">
                          {errors.password ? errors.password : ""}
                        </label>
                      </p>
                      <p>
                        {/* <button type="submit">Submit...</button> */}
                        <Button
                          style={{
                            background: "purple",
                            position: "absolute",
                            top: "110%",
                            width: "100%",
                          }}
                          variant="contained"
                          type="submit"
                        >
                          Log In
                        </Button>
                      </p>
                    </form>
                  </div>
                  {/* <TextField
                  id="emailIdLoginPage"
                  required
                  label="Email ID"
                  name="email"
                  type="text"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                  value={fields.email}
                  data-attribute-name="email..."
                  autoComplete="current-password"
                  style={{ marginTop: 20, marginBottom: 20 }}
                />
                <label className="error">
                  {errors.email ? errors.email : ""}
                </label> */}
                  {/* <p>
            <label>
              ajinath
              <input
                type="text"
                name="email"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.email}
                data-attribute-name="email..."
              />
            </label>
            <label className="error">
              {errors.email ? errors.email : ""}
            </label>
          </p>   */}

                  {/* password textfield LoginPage         */}
                  {/* <InputLabel htmlFor="outlined-adornment-password" required>
                    Password
                  </InputLabel> */}
                  {/* <OutlinedInput
                    id="passwordLoginPage"
                    required
                    type={showPassword ? "text" : "password"}
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
                  /> */}
                  <Link
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "92%",
                      textDecoration: "none",
                    }}
                    onClick={handleClickOpen}
                  >
                    Forgot password?
                  </Link>
                  {/* dialog open on click of forget password */}
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      component: "form",
                      onSubmit: handleSubmit,
                    }}
                  >
                    {/* forgot ,forget password link */}
                    {/* <Link style={{position:'absolute', right:0, top:74, textDecoration:'none'}} onClick={()=>{alert("this is password change root")}}>Forgot password?</Link> */}
                    {/* forget password dialog box dialog title      */}
                    <DialogTitle sx={{ color: "purple", textAlign: "center" }}>
                      Did you forget your password?
                    </DialogTitle>
                    {/* forget password dialog box dialog content      */}
                    <DialogContent>
                      {/* forget password dialog box dialog text      */}
                      <DialogContentText sx={{ paddingBottom: 0 }}>
                        Enter your email address and we'll send you a link to
                        reset password
                      </DialogContentText>
                      {/* forget password dialog box email id      */}
                      <TextField
                        label="Email address"
                        fullWidth
                        id="email"
                        name="email"
                        type="email"
                        required
                      />
                    </DialogContent>
                    <Button
                      type="submit"
                      variant=""
                      fullWidth
                      sx={{
                        height: 50,
                        background: "#753081",
                        color: "white",
                        marginTop: 2,
                      }}
                    >
                      Request reset link
                    </Button>
                    <Button
                      onClick={handleClose}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Back to login
                    </Button>
                    <DialogActions></DialogActions>
                  </Dialog>
                </FormControl>
                {/* login button of Login Page and click handleLogin event on click*/}
              </FormControl>
            </Paper>
          </Fragment>

          <div>
            {/* <h3>React Form Input Validation - validate</h3> */}
            {/* <form
              className="myForm"
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
            > */}
            {/* <Button
                style={{
                  background: "purple",
                  position: "absolute",
                  bottom: 100,
                  width: "24%",
                  margin: "0px 20px",
                }}
                variant="contained"
                // onClick={handleLogin}
                type="submit"
              >
                Log In
              </Button> */}
            {/* </form> */}
          </div>
        </Container>
      ) : (
        <>
          <Navbar show={show} setShow={setShow} />
          <Grid container>
            <Grid item xs={2} md={3}>
              <Item
                sx={{
                  backgroundColor: "red",
                  position: "fixed",
                  width: { md: "25%", xs: "19%" },
                }}
              >
                <Leftbar />
              </Item>
            </Grid>
            <Grid item xs={10} md={9}>
              <Item>
                <AdminPage />
              </Item>
              <Item>
                <CategoryPage />
              </Item>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
export default LoginPage;

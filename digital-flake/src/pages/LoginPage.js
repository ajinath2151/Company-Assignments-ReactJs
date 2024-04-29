import React, { useState } from "react";
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
import styled from "styled-components";
import { useFormInputValidation } from "react-form-input-validation";
import { Link as RouterLink, useNavigate } from "react-router-dom"; 

const Item = styled(Paper)(({ theme }) => ({}));

const TopDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
});

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

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
      onLogin(); // Call the onLogin function passed from parent
      navigate("/adminPage"); // Navigate to Product page      
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const emailValue = formJson.email;
    handleClose();
    alert("password link sent to your email");
  };

  return (
    <Container id="myid" style={{ marginTop: 50 }}>
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
            <form className="myForm" noValidate autoComplete="off" onSubmit={onSubmit}>
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
                style={{ marginTop: 20, width: "95%" }}
              />
              <label className="error">{errors.email ? errors.email : ""}</label>
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
                  style={{ marginTop: 5, marginBottom: 10, width: "95%" }}
                />
                <label className="error">{errors.password ? errors.password : ""}</label>
              </p>
              <p>
                <Button
                  style={{ background: "purple", position: "absolute", top: "110%", width: "100%", right:'0%' }}
                  variant="contained"
                  type="submit"
                >
                  Log In
                </Button>
              </p>
            </form>
            <Link
              style={{ position: "absolute", right: 0, top: "92%", textDecoration: "none" }}
              onClick={handleClickOpen}
            >
              Forgot password?
            </Link>
            <Dialog open={open} onClose={handleClose} PaperProps={{ component: "form", onSubmit: handleSubmit }}>
              <DialogTitle sx={{ color: "purple", textAlign: "center" }}>Did you forget your password?</DialogTitle>
              <DialogContent>
                <DialogContentText sx={{ paddingBottom: 0 }}>
                  Enter your email address and we'll send you a link to reset password
                </DialogContentText>
                <TextField label="Email address" fullWidth id="email" name="email" type="email" required />
              </DialogContent>
              <Button
                type="submit"
                variant=""
                fullWidth
                sx={{ height: 50, background: "#753081", color: "white", marginTop: 2 }}
              >
                Request reset link
              </Button>
              <Button onClick={handleClose} sx={{ display: "flex", justifyContent: "center" }}>
                Back to login
              </Button>
              <DialogActions></DialogActions>
            </Dialog>
          </FormControl>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default LoginPage;

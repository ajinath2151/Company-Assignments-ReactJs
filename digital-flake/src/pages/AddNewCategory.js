import React, { useState } from "react";
import CategoryPage from "./CategoryPage";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { ArrowBack, KeyboardBackspace } from "@mui/icons-material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const AddNewCategory = () => {
  const [show, setShow] = useState(true);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCategory = () => {
    setShow(!show);
  };
  const handleSave = () => {
    alert("dummy message for data saved........");
  }

  return (
    <>
      {show ? (
        <Container
          sx={{
            marginTop: { md: "69px", xs: "64px"},
            backgroundColor: "lightcoral",
            height: '100vh',            
          }}
        >
          {/* for top / back logo and add Category */}
          <Box sx={{ display: "flex", padding: "20px 0px" }}>
            <KeyboardBackspace onClick={handleCategory} />
            <Typography sx={{ marginLeft: 2 }}>Add Category</Typography>
          </Box>
          {/* for other 4 fields of textfield and select */}
          <FormControl sx={{ display: "flex" }}>
            <Box sx={{ flexDirection: "row", flexGrow: 1 }}>
              <TextField
                required
                id="outlined-required"
                label="User Id"
                placeholder="Enter User Id"
                sx={{ minWidth: "30%", marginRight: 2 }}
              />
              <TextField
                required
                id="outlined-required"
                label="Id"
                placeholder="Enter Id"                
                sx={{ minWidth: "30%", marginRight: 2  }}
              />
              <FormControl sx={{ minWidth: "30%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}                  
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                id="outlined-multiline-static"
                label="Body"
                multiline
                rows={2}
                placeholder="Body Content"
                sx={{ minWidth: "30%", marginTop:3 }}
              />
            </Box>
          </FormControl>
            <Box sx={{margin:'0px 10px', position:'absolute', bottom:10, right:10}}>
              <Button variant="outlined" sx={{width:{md:179, xs:150}, borderRadius:'22px', height:{md:'48px', sx:'28px'}, marginRight:5}} onClick={handleCategory}>Cancel</Button>
              <Button variant="outlined" sx={{width:{md:179, xs:150}, borderRadius:'22px', height:{md:'48px', sx:'28px'}, background:'purple'}} onClick={handleSave}>Save</Button>
            </Box>
        </Container>
      ) : (
        <CategoryPage />
      )}
    </>
  );
};

export default AddNewCategory;

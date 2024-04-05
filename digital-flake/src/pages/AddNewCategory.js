import React, { useState } from "react";
import CategoryPage from "./CategoryPage";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//main function / component
const AddNewCategory = () => {
  //for to decide this page should show or not
  const [show, setShow] = useState(true);
  //used for category states completed or not (select)
  const [complete, setComplete] = React.useState("");

  // onchange of select set value of select (combobox)
  const handleChange = (event) => {
    setComplete(event.target.value);
  };

  //to decide this page should show or not
  const handleCategory = () => {
    setShow(!show);
  };
  //onClick of save just give dummy message to user
  const handleSave = () => {
    alert("dummy message for data saved........");
  };

  //main return function
  return (
    <>
      {/* show decide this component should show or not and main container */}
      {show ? (
        <Container
          sx={{
            marginTop: { md: "69px", xs: "64px" },
            backgroundColor: "lightcoral",
            height: "100vh",
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
                sx={{ minWidth: "30%", marginRight: 2 }}
              />
              <FormControl sx={{ minWidth: "30%" }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={complete}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value={"Complete"}>Completed</MenuItem>
                  <MenuItem value={"InProcess"}>InProcess</MenuItem>
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
                sx={{ minWidth: "30%", marginTop: 3 }}
              />
            </Box>
          </FormControl>
          {/* bottom button cancel and save */}
          <Box
            sx={{
              margin: "0px 10px",
              position: "absolute",
              bottom: 10,
              right: 10,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: { md: 179, xs: 150 },
                borderRadius: "22px",
                height: { md: "48px", sx: "28px" },
                marginRight: 5,
              }}
              onClick={handleCategory}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { md: 179, xs: 150 },
                borderRadius: "22px",
                height: { md: "48px", sx: "28px" },
                background: "purple",
              }}
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </Container>
      ) : (
        <CategoryPage />
      )}
    </>
  );
};

export default AddNewCategory;

import React, { useState } from "react";
import CategoryPage from "./CategoryPage";
import { Button, Container } from "@mui/material";

const AddNewCategory = () => {
  const [show, setShow] = useState(true);

  const handleCategory = () => {    
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }

  };

  return (
    <>
      {show ? (
        <Container>
          <h1 style={{ marginTop: 100 }}>Add new category page</h1>
          <Button variant="contained" onClick={handleCategory}>
            back
          </Button>          
        </Container>
        ):<CategoryPage />  } 
       
    </>
  );
};

export default AddNewCategory;

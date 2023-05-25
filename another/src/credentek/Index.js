import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { Checkbox, FormControlLabel } from "@material-ui/core";

function Index() {
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleClick = (funvalue) => {

    if(funvalue==="a") {
        if (document.getElementById("two") != null) {
            let node = document.getElementById("two");
            let text = node.textContent || node.innerText;
            alert(text);
          }    
    }
    else if(funvalue==="b") {
        if (document.getElementById("one") != null) {
            let node = document.getElementById("one");
            let text = node.textContent || node.innerText;
            alert(text);
          }
    }    
  };

  return (
    <>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              onClick={() => handleClick("a")}
              name="checkedA"

            />
          }
          label="checkbox 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              onClick={() => handleClick("b")}
              name="checkedB"

            />
          }
          label="checkbox 2"
        />
      </FormGroup>
      <div id="one" style={{display:"none"}}>first div</div>
      <br />
      <div id="two" style={{display:"none"}}>second div</div>
    </>
  );
}

export default Index;

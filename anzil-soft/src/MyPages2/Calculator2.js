import React, { useState } from "react";

function Calculator2() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  return (
    <div>
      <label htmlFor="num1">
        {" "}
        Number 1 :
        <input
          type="number"
          name="number1"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))} //same like arrow funciton
        />
      </label>
      <br />
      <label htmlFor="num2">
        {" "}
        Number 2 :
        <input
         type="number" 
         name="number2" 
         id="num2" 
         value={num2}
         onChange={(e)=>setNum2(Number(e.target.value))}
         />
      </label>

      <button onClick={handleAdd}>Add</button>
      <label htmlFor="result">Result : {result} </label>
    </div>
  );
}

export default Calculator2;

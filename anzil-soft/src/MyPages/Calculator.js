import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  //   const handleAdd = () => {
  //       setResult(num1+num2);
  //   };
  //   const handleSub = () => {
  //     setResult(num1-num2);
  //   };
  //   const handleMul = () => {
  //     setResult(num1*num2);
  //   };
  //   const handleDiv = () => {
  //     setResult(num1/num2);
  //   };

  const handleCalculation = (cal) => {
    if (cal === "add") {
      setResult(num1 + num2);
    } else if (cal === "sub") {
      setResult(num1 - num2);
    } else if (cal === "mul") {
      setResult(num1 * num2);
    } else if (cal === "div") {
      setResult(num1 / num2);
    }
  };

  return (
    <div>
      <label htmlFor="num1">
        Number 1 :
        <input
          type="number"
          name="number1"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </label>
      <br />
      <label htmlFor="num2">
        Number 2 :
        <input
          type="number"
          name="number2"
          id="num2"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </label>
      <br />
      {/* <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Substraction</button>
      <button onClick={handleMul}>Multiplication</button>
      <button onClick={handleDiv}>Division</button> */}
      <button onClick={() => handleCalculation("add")}>Add</button>
      <button onClick={() => handleCalculation("sub")}>Sub</button>
      <button onClick={() => handleCalculation("mul")}>Mul</button>
      <button onClick={() => handleCalculation("div")}>Div</button>
      <br />
      Result : {result} <br />
    </div>
  );
}

export default Calculator;

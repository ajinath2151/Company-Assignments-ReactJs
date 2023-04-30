// import React, { useState } from 'react';
//  import AssignmentTwo from './assignment2/AssignmentTwo';
// import Calculator from './MyPages/Calculator';
// import DisplayNames from './MyPages/DisplayNames';

import Calculator2 from "./MyPages2/Calculator2";

function App() {
   
  // const [num1, setNum1] = useState();
  // const [num2, setNum2] = useState();
  // const [result, setResult] = useState(0);





  // const handleOPeration = (output) => {

  //   console.log('outside if')

  //   if(output==='Add') {      
  //     setResult(num1 + num2)
  //   }
  //   else if(output==='Sub') {      
  //     setResult(num1 - num2)
  //   }
  //   else if(output==='Mul') {      
  //     setResult(num1 * num2)
  //   }
  //   else if(output==='Div') {      
  //     setResult(num1 / num2)
  //   }
    
    
  // };
  
  return (
    <div>
      {/* <label htmlFor="num1">Number 1 : </label>
      <input
        type="number"
        id="num1"
        placeholder='Enter First Number'
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <br />
      <label htmlFor="num2">Number 2 : </label>
      <input
        type="number"
        id="num2"
        placeholder='Enter Second Number'
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br />
      <button onClick={() => handleOPeration('Add')}>Add</button>
      <button onClick={() => handleOPeration('Sub')}>Sub</button>
      <button onClick={() => handleOPeration('Mul')}>Mul</button>
      <button onClick={() => handleOPeration('Div')}>Div</button>
      
        

    

      
      <br />
      <label>Result: {result}</label> */}


      {/* <AssignmentTwo /> */}

      {/* <Calculator /> */}

      {/* <DisplayNames /> */}

      <Calculator2 />
    </div>

  );
};
export default App;

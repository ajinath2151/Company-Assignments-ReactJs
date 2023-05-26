import React, { useState } from "react";

function FromChatgpt() {
  const [showDivOne, setShowDivOne] = useState(false);
  const [showDivTwo, setShowDivTwo] = useState(false);

  const handleCheckboxOneChange = () => {
    setShowDivOne(!showDivOne);
  };

  const handleCheckboxTwoChange = () => {
    setShowDivTwo(!showDivTwo);
  };

  return (
    <>
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckboxOneChange} />
        Checkbox One
      </label>
      <label>
        <input type="checkbox" onChange={handleCheckboxTwoChange} />
        Checkbox Two
      </label>

      {showDivOne && <div>Div One content </div>}
      {showDivTwo && <div>Div Two content</div>}
    </div>    
  </>
  );
}

export default FromChatgpt;

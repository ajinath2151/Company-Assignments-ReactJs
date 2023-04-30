import React, { useState } from "react";

function DisplayNames() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameList([...nameList, { firstName,  lastName }]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        <tbody>
          {nameList.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayNames;

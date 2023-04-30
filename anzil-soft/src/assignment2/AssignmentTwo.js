import React, { useState } from "react";

function AssignmentTwo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [list, setList] = useState([]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, { firstName,  lastName }]);
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
          {list.map((user, index) => (
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

export default AssignmentTwo;

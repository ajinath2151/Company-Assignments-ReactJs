import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const DataTable = () => {
  const [myData, setMyData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
      .then((response) => {
        console.log(response.data.appointments);
        setMyData(response.data.appointments);
      });
  }, []);

  return (
    <div>
      <h2>Employee Data Table</h2>
      <table border={1} width={"100%"}>
        <th>
          <tr>PATIENT</tr>
        </th>
        <th>
          <tr>DATE</tr>
        </th>
        <th>
          <tr>TIME</tr>
        </th>
        <th>
          <tr>DOCTOR</tr>
        </th>
        <th>
          <tr>INJURY</tr>
        </th>
        <th>
          <tr>ACTION</tr>
        </th>
        <tbody>
          {myData?.map((item, index) => (
            <tr key={index} >
              <td style={{padding:'8px'}}>{item.patient_name}</td>
              <td>{item.appointment_date}</td>
              <td>{item.appointment_time}</td>
              <td>{item.doctor}</td>
              <td>{item.injury}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

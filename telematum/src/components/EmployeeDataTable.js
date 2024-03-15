import axios from "axios";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const EmployeeDataTable = () => {
  const columns = [
    { id: "patient_name", name: "patient_name" },
    { id: "appointment_date", name: "appointment_date" },
    { id: "appointment_time", name: "appointment_time" },
    { id: "doctor", name: "doctor" },
    { id: "injury", name: "injury" },
    { id: "action", name: "action" },
  ];

  const [rows, rowsChange] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
      )
      .then((response) => {
        rowsChange(response.data.appointments);
        console.log(response.data.appointments);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant={"h2"}>Employee Data Table</Typography>

      <Paper sx={{ width: "90%", marginLeft: 5 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns?.map((colum) => (
                  <TableCell key={colum.id}>{colum.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.map((row,index)=>{
                return (
                  <TableRow key={index}>
                    {columns && columns.map((colum,index)=>{
                      let value = row[colum.id];
                      return (
                        <TableCell key={value}>
                          {value}
                        </TableCell>
                      )
                    }) }
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default EmployeeDataTable;

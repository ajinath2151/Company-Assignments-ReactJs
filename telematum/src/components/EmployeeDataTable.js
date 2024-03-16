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


import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridDeleteIcon } from "@mui/x-data-grid";

const EmployeeDataTable = () => {

  // columns array with object type values i.e. array of objects for column names
  const columns = [
    { id: "patient_name", name: "PATIENT" },
    { id: "appointment_date", name: "DATE" },
    { id: "appointment_time", name: "TIME" },
    { id: "doctor", name: "DOCTOR" },
    { id: "injury", name: "INJURY" },
    { id: "action", name: "ACTION" },
  ];

  // this is useState for rows data
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

  const showAlarm = (event) => {
    event.preventDefault();
    alert("jjjjjjjjjjjj");
  }
  return (
    
    <div style={{ textAlign: "center" }}>
      <Typography variant={"h2"}>Employee Data Table</Typography>
      {/* paper for styling purposes */}
      <Paper sx={{ width: "90%", marginLeft: 5 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns?.map((colum) => (
                  // table cell means column
                  <TableCell key={colum.id}>{colum.name}</TableCell>
                  
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.map((row,index)=>{
                return (
                  <>
                  <TableRow key={index} >
                    {columns && columns.map((colum,index)=>{
                      let value = row[colum.id];                      
                      return (
                        <TableCell key={value}>
                          {value}   
                        </TableCell>
                      )
                    }) }
                    
                    
                    <MoreVertIcon style={{}} onClick={showAlarm}/>
                  </TableRow>
                  
                    </>
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

import {
  Delete,
  Edit,
  EditCalendar,
  EditNote,
  GridView,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import AddNewCategory from "./AddNewCategory";

// search input of top
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

// search input of top
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// search input box
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // responsive screen up than small
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
    // responsive screen small than md
    [theme.breakpoints.down("md")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

//this one used for change table columns background and font size of table data
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// give gray background for odd rows of fetched data
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: "#eaeaea",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CategoryPage = () => {
  // this useState for store and update table data
  const [rows, setRows] = useState([]);
  // creating columns
  // for filter only searched data to display only search data in table
  const [filterData, setFilterData] = useState([]);

  // for showing the AddNewCategory component
  const [show, setShow] = useState(true);

  // for search data
  const handleFilter = (value) => {
    const res = filterData.filter( f => f.body.toLowerCase().includes(value));
    setRows(res)
    // setFilterData(res);
  };
  // for columns
  const columns = [
    { id: "userId", name: "User Id" },
    { id: "id", name: "ID" },
    { id: "title", name: "Title" },
    { id: "body", name: "Body" },
  ];
  // useEffect for fetch data to set as table data from api
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setRows(response.data);
      console.log([response.data]);
      setFilterData(response.data);
    });
  }, []);

  // for set value of setShow of showing the AddNewCategory component
  const handleNewCategory = () => {    
    if (show === true) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }
  return (
    <>
      {/* main container for categoryPage */}
      { show ? (
      <Container sx={{
        marginTop:{md:'69', xs:'65px'},
      }}>
        {/* main box container for top div data logo / category text , input field with search and add new */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: 2,
            justifyContent: "space-between",
            paddingBottom: 2,
          }}
        >
          {/* subdive for making cateory logo and text as one thing , to settle for justifyContent property */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <GridView />
            <Typography
              sx={{ fontSize: "20px", marginLeft: "20px" }}
              variant="body1"
            >
              <strong>Category</strong>
            </Typography>
          </div>
          {/* top search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search in body..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleFilter(e.target.value)}
            />
          </Search>
          {/* AddNewCategory button */}
          <Button variant="contained" sx={{ marginRight: "20px" }} onClick={handleNewCategory}>
            Add New
          </Button>
        </Box>

        {/* category table for display rows and columns form api's */}
        <TableContainer component={Paper}>
          {/* if remove minWidth then it's fully responsive i.e. showing full content in next line of same rwo */}
          <Table sx={{ minWidth: 500 }} aria-label={"customised table"}>
            <TableHead>
              <StyledTableRow>
                {columns?.map((column) => (
                  <StyledTableCell key={column.id}>
                    {column.name}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {/* {rows?.map((row)=>(
                  <TableCell>{row.id}</TableCell>
                ))} */}
              {rows?.map((row, index) => {
                return (
                  <>
                    <StyledTableRow key={index}>
                      {columns?.map((column, index) => {
                        let value = row[column.id];
                        return (
                          <StyledTableCell key={value}>{value}</StyledTableCell>
                        );
                      })}
                      <div
                        style={{
                          display: "flex",
                          padding: "5px 0px",
                          margin: "5px 0px",
                        }}
                      >
                        <Edit sx={{ marginRight: 2 }} />{" "}
                        <Delete sx={{ marginRight: 2 }} />
                      </div>
                    </StyledTableRow>
                  </>
                );
              })}
              {/* {rows.map((d, i) => (
                <div kay={i}>{d.title}</div>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      ) : <AddNewCategory />}
    </>
  );
};

export default CategoryPage;

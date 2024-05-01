import React, { Fragment, useEffect, useState } from "react";
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
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import AddNewCategory from "./AddNewCategory";

// Styled components
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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#eaeaea",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CategoryPage = () => {
  const [rows, setRows] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [show, setShow] = useState(true);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Fetch data function
  const fetchData = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
      );
      setRows(response.data);
      setFilterData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Debounced version of fetchData
  const debouncedFetchData = debounce(fetchData, 1000); // 3000ms debounce time

  const handleFilter = (value) => {
    debouncedFetchData(value.toLowerCase());
  };

  const columns = [
    { id: "userId", name: "User Id" },
    { id: "id", name: "ID" },
    { id: "title", name: "Title" },
    { id: "body", name: "Body" },
  ];

  useEffect(() => {
    fetchData(""); // Initial fetch
  }, []);

  const handleNewCategory = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: 2,
              justifyContent: "space-between",
              paddingBottom: 2,
              marginTop: { md: "69px", xs: "65px" }, // Added margin top
              backgroundColor:'purple',
              color:'white',
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "20px", marginLeft: "20px" }} variant="body1">
                <strong>Category</strong>
              </Typography>
            </div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Find in body..."
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => handleFilter(e.target.value)}
              />
            </Search>
            <Button variant="contained" sx={{ marginRight: "20px" }} onClick={handleNewCategory}>
              Add New
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="customised table">
              <TableHead>
                <StyledTableRow>
                  {columns?.map((column) => (
                    <StyledTableCell key={column.id}>{column.name}</StyledTableCell>
                  ))}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row, i) => (
                  <React.Fragment key={i}>
                    <StyledTableRow>
                      {columns?.map((column, index) => {
                        let value = row[column.id];
                        return (
                          <StyledTableCell key={`${i}-${index}`}>
                            {value}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <AddNewCategory />
      )}
    </>
  );
};

export default CategoryPage;

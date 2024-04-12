import {
  Box,
  Collapse,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  AirlineStops,
  ArrowDropUp,
  ArrowRight,
  GridView,
  Home,
  Inbox,
  RssFeed,
  StarBorder,
} from "@mui/icons-material";
import CategoryPage from "./CategoryPage";

// main component function
const Leftbar = () => {
  //for open / close list item home
  const [homeOpen, setHomeOpen] = React.useState(false);
  //for open / close list item category
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  //for open / close list item product
  const [productOpen, setProductOpen] = React.useState(false);

  //for toggle home list item value
  const handleHomeClick = () => {
    setHomeOpen(!homeOpen);        
  };
  //for toggle category list item value
  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };
  //for toggle product list item value
  const handleProductClick = () => {
    setProductOpen(!productOpen);
  };

  //main return of this component
  return (
    <div>
      {/* main container */}
      <Container
        sx={{
          height: "100vh",
          backgroundColor: "red",
          display: "flex",
          position: "relative",
          top: { xs: "69px", md: "69px" },
        }}
      >
        {/* all i.e. home category and product list items with their logo and inner content */}
        <Box>
          <List>
            {/* home list item */}
            <ListItemButton onClick={handleHomeClick}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ display: { xs: "none", md: "flex" } }}
              />
              {homeOpen ? <ArrowDropUp /> : <ArrowRight />}
            </ListItemButton>

            <Collapse in={homeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText
                    primary="Starred"
                    sx={{ display: { xs: "none", md: "flex" } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
            {/* category list item */}
            <ListItemButton onClick={handleCategoryClick}>
              <ListItemIcon>
                <GridView />
              </ListItemIcon>
              <ListItemText
                primary="Category"
                sx={{ display: { xs: "none", md: "flex" } }}
              />
              {categoryOpen ? <ArrowDropUp /> : <ArrowRight />}
            </ListItemButton>
            <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AirlineStops />
                  </ListItemIcon>
                  <ListItemText
                    primary="Starred"
                    sx={{ display: { xs: "none", md: "flex" } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
            {/* product list item */}
            <ListItemButton onClick={handleProductClick}>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText
                primary="Inbox"
                sx={{ display: { xs: "none", md: "flex" } }}
              />
              {homeOpen ? <ArrowDropUp /> : <ArrowRight />}
            </ListItemButton>
            <Collapse in={productOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <RssFeed />
                  </ListItemIcon>
                  <ListItemText
                    primary="Starred"
                    sx={{ display: { xs: "none", md: "flex" } }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default Leftbar;

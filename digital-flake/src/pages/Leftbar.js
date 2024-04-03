import {
  Box,
  Collapse,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
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
import AdminPage from "./AdminPage";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const Leftbar = () => {
  const [homeOpen, setHomeOpen] = React.useState(false);
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [productOpen, setProductOpen] = React.useState(false);

  const handleHomeClick = () => {
    setHomeOpen(!homeOpen);
  };
  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };
  const handleProductClick = () => {
    setProductOpen(!productOpen);
  };

  return (
    <div>
      <Container sx={{ height: "100vh", backgroundColor: "red", display:'flex', position:'relative', top:{xs:'69px', md:'69px'}, }}>
        <Box>
          <List>
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

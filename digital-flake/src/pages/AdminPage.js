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
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import digitalFlake from "../images/logo/digitalFlake.png";
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
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Image = styled("img")({
  width: "30px",
  height: "30px",
});

const AdminPage = () => {
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
      <Grid container>
        <Grid item xs={2} md={3}>
          <Item sx={{ height: "100vh", backgroundColor: "#f2eeee" }}>
            <Container>
              <Box>
                <List>



                  <ListItemButton onClick={handleHomeClick}>
                    <ListItemIcon>
                      <Home />
                    {/* <Tooltip title="Home">
                    <IconButton>
                      <Home />
                    </IconButton>
                  </Tooltip> */}
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
          </Item>
        </Grid>
        {/* right side containt */}
        <Grid item xs={10} md={9}>
          <Item
            sx={{
              textAlign: "left",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Container>
              <Box textAlign="center">
                <Image src={digitalFlake} alt="digital flake logo" />
                <Typography variant="h3">
                  <strong>Digital</strong>flake
                </Typography>
                <Typography variant="body1">
                  Welcome to Digitalflake Admin
                </Typography>
              </Box>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPage;

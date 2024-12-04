import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import logo from "../../Assets/Images/Logo.png";

const drawerWidth = 240;
const navItems = [
  "today special offer",
  "why food hut",
  "our menu",
  "our popular food",
];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="Logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        position: "fixed",
        top: "0",
        left: "0",
        height: "auto",
        padding: "0px!important",
        justifyContent:"space-between"
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "realtive",
          backgroundColor: "transparent",
          color: "#fff",
          boxShadow: "none",
          top: "0",
          left: "0",
          padding: "20px 0px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "block",
                  padding: "0px",
                  width: "121px",
                  height: "78px",
                },
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "121px", height: "78px" }}
              />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                    fontFamily: "Poppins",
                    fontWeight: "Regular",
                    fontSize: {lg:"16px",md:"14px",sm:"11px"},
                    padding: {lg:"20px",md:"10px",sm:"5px"},
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Typography sx={{ paddingLeft: {md:"55px",xs:"0px",lg:"90px",sm:"20px"},marginLeft:"auto" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F65F5F",
                  borderRadius: "100px",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color:"#000",
                  fontSize:{sm:"14px",md:"14px"},
                  fontWeight:"Regular",
                  boxShadow:"none",
                  padding:{xs:"5px 15px!important",md:"8px 15px!important"}
                }}
              >
                Download App
              </Button>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

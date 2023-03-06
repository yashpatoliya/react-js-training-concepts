import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Slide,
  useScrollTrigger,
  Modal,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import theme from "../theme";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navigation(props) {
  const AnchorCss = { mr: "2  !important" };

  const navItems = [
    { title: "Mui Components" },
    // { title: "Quiz Rules", icon: <PersonIcon sx={AnchorCss} /> },
    // { title: "Coins History", icon: <PersonIcon sx={AnchorCss} /> },
    // { title: "Partner US", icon: <PersonIcon sx={AnchorCss} /> },
    // { title: "Terms and Conditions", icon: <PersonIcon sx={AnchorCss} /> },
    // { title: "Privacy Policy", icon: <PersonIcon sx={AnchorCss} /> },
    // { title: "Contact Us", icon: <PersonIcon sx={AnchorCss} /> },
    // { title: "Login", icon: <PersonIcon sx={AnchorCss} /> },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{ textAlign: "center", backgroundColor: "#000031" }}
      bgcolor="primary"
    >
      <Box
        variant="circular"
        sx={{
          margin: "5px",
          cursor: "pointer",
          borderRadius: "50%",
          marginLeft: "auto",
          padding: "8px",
        }}
        width={40}
        height={40}
        onClick={handleDrawerToggle}
      >
        <img src="../assets/close.svg" width="100%" height="100%" />
      </Box>
      <Box
        variant="circular"
        sx={{
          borderRadius: "50%",
          margin: "auto",
          backgroundColor: "#FFFFFF",
          padding: "13px",
        }}
        width={80}
        height={80}
      >
        <img src="../assets/profile.svg" width="100%" height="100%" />
      </Box>
      <Typography variant="h5" color="#ffeb3b">
        Welcome!
      </Typography>
      <Typography variant="p" color="#fff">
        play Quiz & earn coins
      </Typography>

      <Box
        variant="circular"
        sx={{
          margin: "10px 0 0",
          borderRadius: "20px 20px 0 0",
          backgroundColor: "#FFFFFF",
        }}
        width="100%"
      >
        <List>
          {navItems.map((item) => (
            <Link to="/quiz" sx={{}}>
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "left", textDecoration: "none" }}
                >
                  {item.icon}
                  <ListItemText
                    primary={item.title}
                    sx={{ marginLeft: "10px", textDecoration: "none" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
  // const container = window !== undefined ? () => window().document.body : undefined;
  const drawerWidth = 300;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <AppBar color="primary">
        <Toolbar sx={{ padding: "5px 15px" }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon color="white" />
          </IconButton>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: "white",
              }}
            >
              Mui Components
            </Typography>
          </Link>

          <Button
            variant="outlined"
            color="white"
            sx={{
              ml: "auto",
              fontSize: "13px",
              padding: "1px 5px 1px 0",
            }}
            onClick={handleOpen}
          >
            <img src="assets/scoin.png" width="30%" />
            200 rupee
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button  onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
}

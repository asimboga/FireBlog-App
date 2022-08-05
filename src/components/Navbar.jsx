import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentUser = {displayName:"Asım BOĞA"}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Asım Blog
            </Link>
          </Typography>
          {auth && (
            <div style={{ display: "inline" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={
                  () => {navigate("login") ; setAnchorEl(null)
                }}>Login</MenuItem>
                <MenuItem onClick={() => {navigate("register") ; setAnchorEl(null) }}>
                  Register
                </MenuItem>
                <MenuItem onClick={() => {navigate("profile") ; setAnchorEl(null)}}>Profile</MenuItem>
                <MenuItem onClick={() => {navigate("newblog"); setAnchorEl(null)}}>NewBlog</MenuItem>
              </Menu>
              <h5>{currentUser.displayName}</h5>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

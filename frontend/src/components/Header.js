import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#07375c" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
          Header Logo
        </Typography>
        <Typography variant="h6">Header Menu</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

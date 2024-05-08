import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  MenuItem,
  Menu,
} from "@material-ui/core";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemText primary="User List" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="School List" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Textbook List" />
        </ListItem>
      </List>
      <Divider />
      <MenuItem onClick={handleMenuClick}>Reports</MenuItem>
      <Menu
        id="report-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Daily</MenuItem>
        <MenuItem onClick={handleClose}>Weekly</MenuItem>
        <MenuItem onClick={handleClose}>Monthly</MenuItem>
      </Menu>
    </Drawer>
  );
};

export default Dashboard;

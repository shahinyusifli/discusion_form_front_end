import { Link } from "react-router-dom";
import authFindUser from "../services/Auth/auth-find-user";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = authFindUser()
  return (

      <Grid container spacing={2} columns={16}>

        <Grid item xs={4}>
        <Typography variant="h4" gutterBottom component="div">
        Discusion form
      </Typography>
        </Grid>
        <Grid item xs={12 }>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Main menu</Button>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {user && <MenuItem component={Link} to="/dashboard" onClick={handleClose}>Dashboard</MenuItem>}
        {user && <MenuItem component={Link} to="/dashbaord/post" onClick={handleClose}>Create topic</MenuItem>}
        {user || <MenuItem component={Link} to="/login" onClick={handleClose}>Login</MenuItem>}
        {user || <MenuItem component={Link} to="/register" onClick={handleClose}>Register</MenuItem>}
        {user && <MenuItem component={Link} to="/logout" onClick={handleClose}>Logout</MenuItem>}
        {user && <MenuItem component={Link} to="/topic" onClick={handleClose}>Topics</MenuItem>}
      </Menu>
        </Grid>

      
      </Grid>
      


  );
}

export default Navbar;



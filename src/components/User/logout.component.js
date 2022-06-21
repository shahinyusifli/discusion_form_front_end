import React, { Component } from "react";
import authService from "../../services/Auth/auth.service";
import Button from '@mui/material/Button';

const Logout = () => {

 
  const handleClick = () => {
    authService.logout()

    window.location.replace("/login")
  }

  return (
    <Button variant="contained" disableElevation onClick={handleClick}>
      Logout
    </Button>
  );
}

export default Logout;
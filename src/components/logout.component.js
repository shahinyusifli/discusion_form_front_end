import React, { Component } from "react";

import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";

import Button from '@mui/material/Button';

const Logout = () => {
          
          const navigate = useNavigate();
          const handleClick = () => {
                    authService.logout()
                    navigate("/login");
          }
        
          return (
                    <Button variant="contained" disableElevation onClick={handleClick}>
                    Logout
                  </Button>
          );
        }
         
export default Logout;
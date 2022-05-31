import React, { Component } from "react";

import UserService from "../../services/user.service";



import { useState, useEffect } from 'react';

const TopicGetNames = () => {
  const [data, setData] = useState(null);



  const componentDidMount = () => {
          UserService.getUserBoard("/topic/get/name").then(
            response => {
                      setData(response.data)
                      return data;
            },
            error => {
                    setData(error.response.data)
                    return data
            }
          );
        }
  

  
}
 
export default TopicGetNames;
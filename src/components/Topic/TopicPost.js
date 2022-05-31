import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import UserService from '../../services/user.service';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function TopicPost() {

  const [data, setData] = useState([])
  const [topic, setTopic] = useState()

  useEffect (() =>{
    
    UserService.getUserBoard("/topic/get/name").then(
      response => {
        setData(response.data)
        
      },
      error => {
        (setData(error.response)  && setData(error.response.data)) ||
           setData(error.message)  || setData(error.toString())
            
      }
      
    );
    
  },[])
 
  return (

    
    <form >
      <Autocomplete 
    isOptionEqualToValue={(option, value) => option.id === value.id}
      disablePortal
      id="combo-box-demo"
      onChange={(evt) => setTopic(evt.target.value)}
      options={data}
      getOptionLabel={(option) => option.topicContent || ""}
      sx={{ width: 300 }}
     
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    <Stack direction="row" spacing={2}>
    <Button onClick={() => {console.log(topic)}} variant="outlined">Primary</Button>
    </Stack>
    </form>
    
    
    
  );

  
}
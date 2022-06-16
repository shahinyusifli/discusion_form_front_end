import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserService from '../../services/User/user.service';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { capitalize } from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Created by 𐱁𐰚𐰃𐰤 '}
      <Link color="inherit" href="/">
        My website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')
const theme = createTheme();

const validationTopic = (value) => {
  if (value.length < 20) {
    return (
      <div className="alert alert-danger" role="alert">
        It is uncorret
      </div>
    );
  }
};

export default function TopicCreate() {
  const navigate = useNavigate();
  const [topicContent, setTopic] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const capitalizedTopic = capitalizeFirstLetter(topicContent)
    if (capitalizedTopic.length > 20) {
      navigate("/404")
    }
    if (capitalizedTopic.length < 20) {
      
    UserService.postTopic('/topic/post', capitalizedTopic)
   navigate("/dashboard")
    }
    
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        
          </Avatar>
          <Typography component="h1" variant="h5">
            Create new topic
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
            
              margin="normal"
              required
              fullWidth
              id="topic"
              label="topic"
              name="topic"
              autoComplete="topic"
              autoFocus
              onChange={(evt) => setTopic(evt.target.value)} 
              value={topicContent}
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create new topic
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
import Head from 'next/head';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Head>
        <title>
          404 | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >

            <Typography
              align="center"
              color="textPrimary"
              variant="subtitle2"
            >
              Something is going wrong
            </Typography>
            <Box sx={{ textAlign: 'center' }}>

            </Box>


            <Button
              component="a"
              onClick={() => { navigate("/dashboard") }}
              sx={{ mt: 3 }}
              variant="contained"
            >
              Go back to dashboard for sample topics
            </Button>

            <Button
              component="a"
              onClick={() => { navigate("/dashbaord/post") }}
              sx={{ mt: 3 }}
              variant="contained"
            >
              Go back to topic create
            </Button>


          </Box>
        </Container>
      </Box>
    </>
  )
}







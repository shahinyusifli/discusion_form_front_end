import { Container, Grid } from '@mui/material';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardCardItem from './DashboardCardItem';


const DashboardCardPage = ({ data }) => {

      const theme = createTheme();

      return (
            <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <main>
                        <Container sx={{ py: 8 }} maxWidth="md">
                              <Grid container spacing={4}>
                                   <DashboardCardItem data={data}/>
                              </Grid>
                        </Container>
                  </main>
            </ThemeProvider>
      )
}

export default DashboardCardPage;
import { Container, Grid, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import { CardActionArea, CardActions } from '@mui/material';
import Badge from '@mui/material/Badge';
import DashboardUpdateTopicModal from './DashboardUpdateTopicModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const DashboardCard = ({ data }) => {

      const theme = createTheme();

      return (
            <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <main>
                        <Container sx={{ py: 8 }} maxWidth="md">
                              <Grid container spacing={4}>
                                    {data.map((data, index) => (
                                          <Grid item key={data.topicId} xs={12} sm={6} md={4}>
                                                <Card sx={{ maxWidth: 345 }}>
                                                      <CardActionArea>
                                                            <CardMedia
                                                                  component="img"
                                                                  height="140"
                                                                  image={'https://source.unsplash.com/random?sig=' + index}
                                                                  alt="random"
                                                            />
                                                            <CardContent>
                                                                  <Typography data_testid = "TopicContent" gutterBottom variant="h5" component="div">
                                                                        {data.topicContent}
                                                                  </Typography>
                                                                  <Typography variant="body2" color="text.secondary">
                                                                        {data.timeOfLastMessage === null ? "No Update" : "Updated " + moment(data.timeOfLastMessage).startOf('day').fromNow()}
                                                                  </Typography>
                                                            </CardContent>
                                                      </CardActionArea>
                                                      <CardActions>
                                                            <Stack data_testid = "TotalMessages" spacing={2} direction="row">
                                                                  {parseInt(data.totalMessages) > 0 ? <Badge badgeContent={parseInt(data.totalMessages)} color="primary">
                                                                        <Link to={`/dashboard/get/messages/${data.topicId}`}>
                                                                              <MailIcon color="action" />
                                                                        </Link>
                                                                  </Badge> : <Badge  badgeContent={parseInt(data.totalMessages)} color="primary">
                                                                        <MailIcon color="disabled" />
                                                                  </Badge>}
                                                                  <DashboardUpdateTopicModal data={data} />
                                                            </Stack>
                                                      </CardActions>
                                                </Card>
                                                <br />
                                          </Grid>
                                    ))}
                              </Grid>
                        </Container>
                  </main>
            </ThemeProvider>
      )
}

export default DashboardCard;
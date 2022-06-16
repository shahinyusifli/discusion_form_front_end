import { Box, Container, Grid, Pagination, CardContent, Avatar, Typography, Divider } from '@mui/material';
import DashboardEditText from './DashboardEditText';
import { Link } from 'react-router-dom';
import Badge from 'material-ui/Badge';
import MailIcon from '@mui/icons-material/Mail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const DashboardCard = ({ data }) => {



          return (
                    <Grid container spacing={2} columns={16}>
                                                  <Grid item xs={4}>
                                                       <MuiThemeProvider>
                              
                              <CardContent>
                                        

                                        <Typography
                                                  align="center"
                                                  color="textPrimary"
                                                  gutterBottom
                                                  variant="h5"
                                        >
                                                  {data.topicContent}
                                        </Typography>

                                        <Typography
                                                  align="center"
                                                  color="textPrimary"
                                                  variant="body1"
                                        >
                                                  {data.timeOfLastMessage}
                                        </Typography>
                              </CardContent>

                              <Box sx={{ flexGrow: 1 }} />

                              <Divider />
                              <Box sx={{ p: 2 }}>
                                        <Grid
                                                  container
                                                  spacing={2}
                                                  sx={{ justifyContent: 'space-between' }}
                                        >
                                                  <Grid

                                                            sx={{
                                                                      alignItems: 'center',
                                                                      display: 'flex'
                                                            }}
                                                  >


                                                            <Badge badgeContent={data.totalMessages} color="primary">
                                                                      <MailIcon color="action" />

                                                            </Badge>

                                                  </Grid>
                                                  <Grid
                                                            item
                                                            sx={{
                                                                      alignItems: 'center',
                                                                      display: 'flex'
                                                            }}
                                                  >
                                                            <DashboardEditText data={data} />
                                                            <Typography
                                                                      color="textSecondary"
                                                                      display="inline"
                                                                      sx={{ pl: 1 }}
                                                                      variant="body2"
                                                            >
                                                            </Typography>
                                                  </Grid>
                                        </Grid>
                              </Box>
                                                        </MuiThemeProvider>
     
                                                  </Grid>
                                        </Grid>
                    

          )

}

export default DashboardCard;
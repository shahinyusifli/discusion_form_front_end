import { CardContent, Typography } from '@mui/material';
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import moment from 'moment';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CardActions } from '@mui/material';
import Badge from '@mui/material/Badge';
import DashboardUpdateTopicModal from '../DashboardUpdateTopicModal';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';


const DashboardCardList = ({ data, topicContent, timeOfLastMessage, index, topicId, totalMessages }) => {

      return (
            <>
                  <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                              <CardMedia
                                    component="img"
                                    height="140"
                                    image={'https://source.unsplash.com/random?sig=' + index}
                                    alt="random"
                              />
                              <CardContent>
                                    <Typography data_testid="TopicContent" gutterBottom variant="h5" component="div">
                                          {topicContent}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                          {timeOfLastMessage === null ? "No Update" : "Updated " + moment(timeOfLastMessage).startOf('day').fromNow()}
                                    </Typography>
                              </CardContent>
                        </CardActionArea>
                        <CardActions>
                              <Stack data_testid="TotalMessages" spacing={2} direction="row">
                                    {parseInt(totalMessages) > 0 ? <Badge badgeContent={parseInt(totalMessages)} color="primary">
                                          <Link to={`/dashboard/get/messages/${topicId}`}>
                                                <MailIcon color="action" />
                                          </Link>
                                    </Badge> : <Badge badgeContent={parseInt(totalMessages)} color="primary">
                                          <MailIcon color="disabled" />
                                    </Badge>}
                                    <DashboardUpdateTopicModal data={data} />
                              </Stack>
                        </CardActions>
                  </Card>
                  <br />
            </>
      )
}

export default DashboardCardList;
import { Grid } from '@mui/material';
import * as React from 'react';
import DashboardCardList from './DashboardCardList';


const DashboardCardItem = ({ data }) => {

      return (
            <>
                  {data.map((data, index) => (
                        <Grid item key={data.topicId} xs={12} sm={6} md={4}>
                              <DashboardCardList
                                    data={data}
                                    topicContent={data.topicContent}
                                    timeOfLastMessage={data.timeOfLastMessage}
                                    index={index}
                                    topicId={data.topicId}
                                    totalMessages={data.totalMessages}
                              />
                        </Grid>
                  ))}
            </>
      )
}

export default DashboardCardItem;
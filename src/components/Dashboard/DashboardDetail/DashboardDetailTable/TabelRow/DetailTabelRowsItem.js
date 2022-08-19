import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import moment from 'moment';

const DetailTableRowsItem = ({messageId, messageContent, timeOfLastMessage}) => {

    return (
        <>
                            <TableRow
                                key={messageId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {messageId}
                                </TableCell>
                                <TableCell align="right">{messageContent}</TableCell>
                                <TableCell align="right"> {moment(timeOfLastMessage).format('LLL')}</TableCell>
                            </TableRow>            
        </>
    );
}

export default DetailTableRowsItem;

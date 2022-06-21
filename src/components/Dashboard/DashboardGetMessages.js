import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import authHeader from '../../services/Auth/auth-header';
import moment from 'moment';
import Typography from '@mui/material/Typography';

export default function DashboardGetmessages() {

    const [messages, setMessages] = useState([]);
    const api = axios.create({ baseURL: '' });
    const { topicId } = useParams();


    useEffect(() => {
        api.get("/dashboard/get/messages/" + topicId, { headers: authHeader() })
            .then(response => {
                setMessages(response.data)
            })
        console.log('error')
    }, [])

    return (
        <>
            <br />
            <Typography variant="h5" gutterBottom component="div" align='left'>
                Topic contnent:
                {messages.length > 0 && messages[0].topicContent}

            </Typography>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Messages</TableCell>
                            <TableCell align="right">Last modification date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {messages.map((row) => (
                            <TableRow
                                key={row.messageId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.messageId}
                                </TableCell>
                                <TableCell align="right">{row.messageContent}</TableCell>
                                <TableCell align="right"> {moment(row.timeOfLastMessage).format('LLL')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>

    );
}

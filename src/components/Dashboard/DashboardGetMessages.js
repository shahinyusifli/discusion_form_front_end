import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import authHeader from '../../services/Auth/auth-header';
import { Grid } from '@mui/material';
import { Button, Collapse } from 'react-bootstrap';
//import Collapse from 'react-bootstrap';

const DashboardGetmessages = () => {


    const [messages, setMessages] = useState([])
    const api = axios.create({
        baseURL: ''
    })
    const navigate = useNavigate()
    const { topicId } = useParams();
    const [open, setOpen] = useState(false);



    useEffect(() => {
        api.get("/dashboard/get/messages/" + topicId, { headers: authHeader() })
            .then(response => {
                setMessages(response.data)
            })
        console.log('error')
    }, [])




    return (
        <div className="blog-details">
            {messages.map((item) => (
            <Grid item key={item.messageId}>
                {
                item.messageContent && 
                <div id="example-collapse-text">
                  <h3>{item.messageContent}</h3>
                  <h3>{item.dateOfMessage}</h3>
                </div>
                }
            </Grid>
            )
            )}
        </div>
    )
};

export default DashboardGetmessages;
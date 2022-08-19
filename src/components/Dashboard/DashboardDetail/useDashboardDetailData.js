import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import authHeader from '../../../services/Auth/auth-header';


const useDashboardDetailData = () => {

    const [messages, setMessages] = useState([]);
    const api = axios.create({ baseURL: '' });
    const { topicId } = useParams();

    
    useEffect(() => {
        api.get("/dashboard/get/messages/" + topicId, { headers: authHeader() })
            .then(response => {
                setMessages(response.data)
            })
    }, [])

    return messages
}

export default useDashboardDetailData;
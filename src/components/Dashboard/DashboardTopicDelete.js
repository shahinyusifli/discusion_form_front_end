import React from 'react';
import axios from 'axios';
import authHeader from '../../services/Auth/auth-header';
import DeleteIcon from '@mui/icons-material/Delete';

const DashboardDelete = ({ data }) => {

          const api = axios.create({
                    baseURL: ''
          })

          const handleDelete = (data) => {
                    api.delete("/dashboard/delete/" + data.topicId, { headers: authHeader() })
                    window.location.reload()
          }

          return (
                    <DeleteIcon data_testid = "DeleteIcon" onClick={() => handleDelete(data)} />
          )
}

export default DashboardDelete;
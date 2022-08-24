import UserService from "../../../services/User/user.service";
import { useState, useEffect, useMemo } from "react";


const useDashboardData = () => {

 const [content, setContent] = useState([]);

 useEffect(() => {
  UserService.getUserBoard("/dashboard/get").then(
    response => {
      setContent(response.data)
    },
    error => {setContent(error)}
  );
 }, [])
  
  return content
}

export default  useDashboardData;
import { useState, useEffect } from 'react';
import UserService from './user.service';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    
      UserService.getUserBoard('/dashboard/get').then(
        response => {
          
          setData(response.data)
        },
        error => {
          setError(error)
        }
      );
    }, );

    return { data, error };
  
  }

 

 
export default useFetch;
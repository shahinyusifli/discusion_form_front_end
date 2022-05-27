import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000';

class UserService {
  getPublicContent(arg) {
    return axios.get(API_URL + arg);
  }

  getUserBoard(arg) {
    return axios.get(API_URL + arg, { headers: authHeader() });
  }

  
}

export default new UserService();
import axios from 'axios';
import authHeader from '../Auth/auth-header';

const API_URL = 'http://localhost:5000';

class UserService {
  getPublicContent(arg) {
    return axios.get(API_URL + arg);
  }

  getUserBoard(arg) {
    return axios.get(API_URL + arg, { headers: authHeader() });
  }

  postTopic(end_point, payload) {
    return axios.post(API_URL + end_point,
      { topicContent: payload },
      { headers: authHeader() });
  }



}

export default new UserService();
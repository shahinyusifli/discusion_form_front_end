import axios from "axios";

const API_URL = "http://localhost:5000/user/";
const ROOT_API_URL = "http://localhost:5000"

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "sigin", {
        username,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, role) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      role
    });
  }

  topicPost(topicName) {
    return axios.post(ROOT_API_URL + "/topic/post", {
      topicName
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
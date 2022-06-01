import axios from "axios";


const ROOT_API_URL = "http://localhost:5000";



const RequestService = () => {
          const topicPost = (topicName) => {
                    return axios.post(ROOT_API_URL + "/topic/post", {
                      topicName
                    });
                  }
};

export default RequestService;
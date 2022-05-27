import React, { Component } from "react";

import UserService from "../../services/user.service";

export default class TopicGet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getUserBoard("/topic/get").then(
      response => {
        this.setState({
          content: response.data,
         
        });
        
        console.log(response.data)
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div>
      {this.state.content.map((item) => (
      <div key={item.topicId}>
        <h5>{item.topicName}</h5>
       
        <p>{item.messageName}</p>
        
      </div>
      ))}
      
    </div>
    );
  }
}
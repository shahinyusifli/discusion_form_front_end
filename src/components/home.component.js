import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getUserBoard("/dashboard/get").then(
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
       
        <p>{item.totalMessages}</p>
        <p>Last modification date: {item.timeOfLastMessage}</p>
      </div>
      ))}
      
    </div>
    );
  }
}
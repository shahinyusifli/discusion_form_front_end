import React, { Component } from "react";
import UserService from "../services/user.service";
import { Card } from "react-bootstrap";



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
            <Card>
              <Card.Header>{item.topicName}</Card.Header>
              <Card.Body>
                <Card.Title>There are {item.totalMessages} messages under this topic</Card.Title>
                <Card.Text>
                  {item.timeOfLastMessage} is the last modification date of message in {item.topicName} topic
                </Card.Text>

              </Card.Body>
            </Card>
          </div>


        ))}



      </div>
    );
  }
}
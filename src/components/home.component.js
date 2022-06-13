import React, { Component } from "react";
import UserService from "../services/user.service";
import { Card } from "react-bootstrap";
import EdiText from 'react-editext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import authHeader from "../services/auth-header";
import axios from "axios";
import authGetUserRole from "../services/get-user-role";
import authFindUser from "../services/auth-find-user";
import ReactPaginate from "react-paginate";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      status: '',
      topicContent: '',
      role: authGetUserRole(),
      userExist: authFindUser(),
      offset: 0,
      perPage: 5,
      currentPage: 0
    };




  }

  handleRowUpdate = (value, item) => {

    let errorList = []
    const api = axios.create({
      baseURL: ''
    })


    if (value === undefined) {
      errorList.push("Please add topic contnent")
    }

    if (this.state.role != 'admin') {
      errorList.push("Modifing topics are required to admin role")
    }



    if (errorList.length < 1) {
      api.put("/dashboard/update/" + item.topicId, { topicContent: value, topicId: item.topicId }, { headers: authHeader() })
        .then(response => {

          this.setState({
            topicContent: response.data,
          });

        })

    }

  }

  componentDidMount() {
    UserService.getUserBoard("/dashboard/get").then(
      response => {

        const data = response.data;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
          content: slice,
          pageCount: Math.ceil(data.length / this.state.perPage),
        });


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

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.componentDidMount()
    });

};

  checkTopics(value) {
    for (const i in this.state.topic_has_message) {

      return value.topicContent !== i
    }
  }

  render() {
    const { page, perPage, pages } = this.state;
    
    return (
      <div>

        {this.state.content.map((item) => (
          <div key={item.topicId}>
            <Card>
              {
                item.timeOfLastMessage &&
                <Card.Header>
                  {item.topicContent}
                </Card.Header>
              }

              {item.timeOfLastMessage ||

                <EdiText
                  className="text-center"
                  type='text'
                  value={item.topicContent}
                  onSave={(value) => this.handleRowUpdate(value, item)}
                />}


              <Card.Body>
                <Card.Title>There are {item.totalMessages} messages under this topic</Card.Title>
                {
                  item.timeOfLastMessage && <Card.Text>{item.timeOfLastMessage} is the last modification date of message in {item.topicContent} topic</Card.Text>
                }
              </Card.Body>
            </Card>
          </div>
        ))}

        <div className="pagination-txt">Display {5} of {20} relevant
          jobs
        </div>

        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </div>
    );
  }
}
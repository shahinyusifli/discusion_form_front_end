import React, { Component } from "react";
import UserService from "../../services/User/user.service";
import Button from '@mui/material/Button';
import authHeader from "../../services/Auth/auth-header";
import axios from "axios";
import authGetUserRole from "../../services/User/get-user-role";
import authFindUser from "../../services/Auth/auth-find-user";
import { Link } from 'react-router-dom';
import DashboardCard from "./DashboardCard";
import DashboardEditText from "./DashboardEditText";

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
      perPage: 6,
      currentPage: 0,
      api: axios.create({
        baseURL: ''
      })
    };
  }

  

  handleDelete = (value, item) => {
    const api = this.state.api
    api.delete("/dashboard/delete/" + item.topicId, { headers: authHeader() })
    window.location.reload()
  }

  capitalizeFirstLetters([first, ...rest], locale = navigator.language) {
    return first.toLocaleUpperCase(locale) + rest.join('')
  }

  validationTopic(value) {
    if (value.length < 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

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
   return(

    <>
    {this.state.content.map((data) => (
      <DashboardCard data={data}/>
    ))}


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
    </>

    

   );
  }
}
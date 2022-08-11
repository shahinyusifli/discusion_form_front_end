import React, { Component } from "react";
import UserService from "../../services/User/user.service";
import authHeader from "../../services/Auth/auth-header";
import axios from "axios";
import authGetUserRole from "../../services/User/get-user-role";
import authFindUser from "../../services/Auth/auth-find-user";
import DashboardCard from "./DashboardCard";
import ReactPaginate from "react-paginate";
import Pagination from 'react-bootstrap/Pagination';
import DashboardCreateTopicModal from "./DashboardTopicCreateModal";
import Dropdown from 'react-bootstrap/Dropdown';

export default class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      content: [],
      role: authGetUserRole(),
      userExist: authFindUser(),
      offset: 0,
      perPage: 6,
      currentPage: 0,
      filterStates : 'new',
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
          The topic must be less than 20 characters.
        </div>
      );
    }
  };

  checkFilteringStates(value) {
    if (this.state.filterStates === 'dsc' ) {
      return value.sort((a, b) => -1 * a.topicContent.localeCompare(b.topicContent));
      
    }

    if (this.state.filterStates === 'asc') {
      return value;
    }

    if (this.state.filterStates === 'new') {
      return value.sort(function(a,b){return new Date(b.timeOfLastMessage) - new Date(a.timeOfLastMessage);});;
    }
    
  };

  componentDidMount() {
    UserService.getUserBoard("/dashboard/get").then(
      response => {

        const data = response.data;
        
        const unfiltered_slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const slice = this.checkFilteringStates(unfiltered_slice)
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

  handleFilterAscClick = () => {
    
    this.setState({
      filterStates : 'asc'
    }, () => {
      this.componentDidMount()
    });
    
  };

  handleFilterDscClick = () => {
    
    this.setState({
      filterStates : 'dsc'
    }, () => {
      this.componentDidMount()
    });
    
  };

  handleFilterNewOneClick = () => {
    
    this.setState({
      filterStates : 'new'
    }, () => {
      this.componentDidMount()
    });

  
    
  };

  handleChangePerPageTenClick = () => {
    
    this.setState({
      perPage : 10
    }, () => {
      this.componentDidMount()
    }); 
  }

  handleChangePerPageFifteenClick = () => {
    
    this.setState({
      perPage : 15
    }, () => {
      this.componentDidMount()
    });
  
    
  };

  handleChangePerPageSixClick = () => {
    
    this.setState({
      perPage : 6
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

      <>
        <br />
        <DashboardCreateTopicModal />
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
                              <Dropdown.Item onClick={this.handleFilterDscClick}>Sort descending order</Dropdown.Item>
                              <Dropdown.Item onClick={this.handleFilterAscClick}>Sort ascending order</Dropdown.Item>
                              <Dropdown.Item onClick={this.handleFilterNewOneClick}>Sorting the newest one</Dropdown.Item>
                    </Dropdown.Menu>
    </Dropdown>
        
       
        <DashboardCard data={this.state.content} />  
        
        

        <Pagination>
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
            activeClassName={"active"} />
        </Pagination>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Topics per page
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={this.handleChangePerPageSixClick}>6 topics</Dropdown.Item>
        <Dropdown.Item onClick={this.handleChangePerPageTenClick}>10 topics</Dropdown.Item>
        <Dropdown.Item onClick={this.handleChangePerPageFifteenClick}>15 topics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </>



    );
  }
}
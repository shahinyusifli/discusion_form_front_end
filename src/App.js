import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/Auth/auth.service";
import Navbar from "./components/MenuNavBar";
import Login from "./components/User/login.component.js";
import Register from "./components/User/register.component";
import Home from "./components/Dashboard/home.component";
import Logout from "./components/User/logout.component";
import TopicCRUDTable from "./components/Topic/TopicCRUDTable";
import TopicCreate from "./components/Topic/TopicCreate";
import NotFound from "./components/ErrorHandiling/error_404";
import authFindUser from "./services/Auth/auth-find-user";
import DashboardGetmessages from "./components/Dashboard/DashboardGetMessages";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      user : authFindUser(),
    };
  }

 

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    

    return (
      <div>
        

        <div className="container mt-3">

          <Router>
      <div className="App">
        <Navbar/>
      
        <div className="content">
          <Routes>
          
          <Route exact path="/dashboard" element={<Home/>} >
            </Route>
            
            <Route exact path="/dashbaord/post" element={<TopicCreate/>} >
            </Route>
            

            {/* <Route exact path="/dashbaord/post" element={<TopicCreate/>} > */ }
            {/* </Route> */ }
            
            <Route exact path="/login" element={<Login/>} >
            </Route>

            <Route exact path="/register" element={<Register/>} >
            </Route>
            
            <Route exact path="/logout" element={<Logout/>} >
            </Route>
            
            <Route exact path="/topic" element={<TopicCRUDTable/>} >
            </Route>
            
            <Route exact path="/404" element={<NotFound/>} >
            </Route>
            
            <Route exact path="/dashboard/get/messages/:topicId" element={<DashboardGetmessages/>} >
            </Route>
            
          </Routes>
        </div>
      </div>
    </Router>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Logout from "./components/logout.component";
import TopicGet from "./components/Topic/TopicGet";
import TopicPost from "./components/Topic/TopicPost";
import TopicGetName from "./components/Topic/TopicGetNames";




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
      
        <div className="content">
          <Routes>
          
            
            <Route exact path="/" element={<Home/>} >
            </Route>

            <Route exact path="/login" element={<Login/>} >
            </Route>

            <Route exact path="/register" element={<Register/>} >
            </Route>
            
            <Route exact path="/logout" element={<Logout/>} >
            </Route>

            <Route exact path="/topic/get" element={<TopicGet/>} >
            </Route>

            <Route exact path="/topic/post" element={<TopicPost/>} >
            </Route>
            
            <Route exact path="/topic/get/name" element={<TopicGetName/>} >
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
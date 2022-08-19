import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import AuthService from "./services/Auth/auth.service";
import Navbar from "./components/Menu/MenuNavBar";
import Login from "./components/User/login.component.js";
import Register from "./components/User/register.component";
import Logout from "./components/User/logout.component";
import TopicPage from "./components/Topic/TopicPage";
import TopicCreate from "./components/Topic/TopicCreate";
import NotFound from "./components/ErrorHandiling/error_404";
import authFindUser from "./services/Auth/auth-find-user";
import DashboardDetailPage from "./components/Dashboard/DashboardDetail/DashboardDetailPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      user: authFindUser(),
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
              <Navbar userState={authFindUser()} />

              <div className="content">
                <Routes>

                  {authFindUser() === null ? <Route exact path="/login" element={<Login />} >
                  </Route> : <Route path="/dashboard/" element={<DashboardPage />} >
                  </Route>}

                  {authFindUser() === null ? <Route exact path="/login" element={<Login />} >
                  </Route> : <Route exact path="/dashbaord/post" element={<TopicCreate />} >
                  </Route>}

                  {authFindUser() === null ? <Route exact path="/login" element={<Login />} >
                  </Route> : <Route exact path="/topic" element={<TopicPage />} >
                  </Route>}


                  <Route exact path="/login" element={<Login />} >
                  </Route>

                  <Route exact path="/register" element={<Register />} >
                  </Route>

                  <Route exact path="/logout" element={<Logout />} >
                  </Route>

                  <Route exact path="/404" element={<NotFound />} >
                  </Route>

                  {authFindUser() === null ? <Route exact path="/login" element={<Login />} >
                  </Route> : <Route exact path="/dashboard/get/messages/:topicId" element={<DashboardDetailPage />} >
                  </Route>}
                </Routes>
              </div>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
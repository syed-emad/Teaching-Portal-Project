import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeFinal from "./components/Homepage/HomeFinal";
import App2 from "./App2";
import Login from "./components/LoginSignup/Login";
import Register from "./components/LoginSignup/Register";

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
//import MainPage from "./components/TeacherDashboard/MainPage";

import PublicRoute from "./Utils/PublicRoute";
import PublicRouteTeacher from "./Utils/PublicRouteTeacher";
import SearchPage from "./components/SearchResult/SearchPage";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import Card from "./components/TeacherPage/Card";
import Checkout from "./components/CheckoutPage/Checkout";
import Success from "./components/CheckoutPage/Success";
import Final from "./components/TeacherDashboard/Chatbox/Final";
import PrivateRouteTeacher from "./Utils/PrivateRouteTeacher";
import search2 from "./components/SearchResult/search2";
import TP from "./components/TeacherProfile/TeachersProfile";
import TF from "./components/TeacherForm/TeacherForm";
//import Teachersignup from "./components/teachersignup/Teachersignup";
//import Final from "./components/TeacherDashboard/Chatbox/Final";
import DashboardMain from "./components/TeacherDashboard/DashboardMain";
import TeacherLogin from "./components/TeacherLogin/TeacherLogin";
//import MainPage from "./components/TeacherDashboard/MainPage";
function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="header"></div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomeFinal} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/search" component={SearchPage} />
              <PublicRoute exact path="/search2" component={search2} />
              <PublicRoute exact path="/TeachersProfile" component={TP} />
              <PublicRoute exact path="/card" component={Card} />
              <PublicRoute exact path="/Checkout" component={Checkout} />
              <PublicRoute exact path="/Success" component={Success} />
              <PublicRoute exact path="/Register" component={Register} />
              <PublicRoute exact path="/TF" component={TF} />
              <PrivateRouteTeacher
                exact
                path="/TeacherDashboard"
                component={DashboardMain}
              />
              <PrivateRouteTeacher exact path="/messages" component={Final} />
              <PublicRouteTeacher
                exact
                path="/TeacherLogin"
                component={TeacherLogin}
              />
              <PrivateRoute path="/dashboard" component={Dashboard} />

              <Route exact path="/2" component={App2} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

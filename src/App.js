import React, { useState } from "react";
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home, Profiles, ToggleHome, ToggleProfiles } from './components/components';

import Login from './components/Login/Login';
import Logo from './assets/logo.png'
import useToken from './components/Login/useToken';


export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <header>
        <img class="headelement logo" src={Logo} alt="logo"></img>
        <switch>
            <Route exact path="/home" component={ToggleHome}></Route>
            <Route exact path="/profiles" component={ToggleProfiles}></Route>
        </switch>

      </header>
      <body>
        <div class="content">
          <switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/profiles" component={Profiles}></Route>
          </switch>
        </div>
      </body>
    </Router>
  );
}

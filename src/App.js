import React, { useState } from "react";
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home, Profiles } from './components/components';

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
        <div class="headelement modetoggle text-sm ">
          <div class="mb-2"><button class="px-5 py-3 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all"><i class="mdi mdi-circle-outline mr-2 text-xl align-middle leading-none"></i>Button</button></div>

        </div>

      </header>
      <body>
        <div class="content">
          <switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/profiles" component={Profiles}></Route>
          </switch>
        </div>
      </body>
    </Router>
  );
}

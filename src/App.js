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
        <div class="headelement modetoggle bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
          <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="grid">
            <span>Home</span>
          </button>
          <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
            <span>Profiles</span>
          </button>
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

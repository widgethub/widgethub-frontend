import React from 'react';
import '../css/App.css';
import {
  Route,
  Link,
  useHistory
} from "react-router-dom";
import useToken from '../components/Login/useToken';
import { Login } from '../components/components';


import Logo from '../assets/logo.png'
function HeaderView() {
  const location = window.location.pathname;
  console.log(location)
  if (location === "/") {
    return <Link to="/profiles">Profiles</Link>
  }
  else if (location === "/profiles") {
    return <Link to="/">Home</Link>
  }
  else {
    return <Link to="/login">Login</Link>
  }
}


export default function Layout({children}) {
  const { token, setToken } = useToken();

  let history = useHistory();
  if (!token) {
    return <Login/>
  }
  if (window.location.pathname === "/login" && token) {
    history.push("/");
  }

  return (
    <div>
      <header>
        <img class="headelement logo" src={Logo} alt="logo"></img>
        <div class="headelement modetoggle text-sm ">
          <div class="mb-2">
            <button class="px-5 py-1 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all">
            {
              HeaderView()
            }
           </button>
          </div>
        </div>

      </header>
      {children}
   </div>
  );

}

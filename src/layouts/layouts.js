import React from 'react';
import '../css/App.css';
import {
  Link,
  useHistory
} from "react-router-dom";
import { getToken } from '../services/auth.service';


import Logo from '../assets/logo.png'

function removeToken(){
  window.localStorage.removeItem("token")
  window.location.reload()
}

export default function Layout({children}) {

  let history = useHistory();
  if (getToken() === null && window.location.pathname !== "/login") {
    console.log("no getToken!")
    history.push("/login")
  }
  if (window.location.pathname === "/login" && getToken()!== null) {
    console.log("logged in!")
    history.push("/");
  }

  return (
    <div>
      <header>
        <img className="headelement logo" src={Logo} alt="logo"></img>
        <div className="headelement navbtn text-sm ">
          <div className="mb-1">
            <button onClick={removeToken} className="text-gray-400 text-lg hover:text-indigo-600 transition-color duration-200">
              logout
            </button>
          </div>
        </div>
        <div className="headelement navbtn text-sm ">
          <div className="mb-2">
            <Link to="/profiles">
              <button className="text-gray-400 text-lg hover:text-indigo-600 transition-color duration-200">
                profiles
              </button>
            </Link>
          </div>
        </div>
        <div className="headelement navbtn text-sm ">
          <div className="mb-2">
            <Link to="/">
              <button className="text-gray-400 text-lg hover:text-indigo-600 transition-color duration-200">
                home
              </button>
            </Link>
          </div>
        </div>

      </header>
      {children}
   </div>
  );

}

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
          <div className="mb-2">
            <button onClick={removeToken} className="px-5 py-1 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all">
              Logout
            </button>
          </div>
        </div>
        <div className="headelement navbtn text-sm ">
          <div className="mb-2">
            <button className="px-5 py-1 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all">
            { <Link to="/profiles">Profiles</Link> }
           </button>
          </div>
        </div>
        <div className="headelement navbtn text-sm ">
          <div className="mb-2">
            <button className="px-5 py-1 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all">
            { <Link to="/">Home</Link> }
           </button>
          </div>
        </div>

      </header>
      {children}
   </div>
  );

}

import React, { useState } from 'react';
import '../../css/Login.css';

import Swal from 'sweetalert2'
import { saveToken } from '../../services/auth.service';
import axios from 'axios';
import { API_URL } from '../../config'
import {
  Link,
  useHistory
} from "react-router-dom";

import Logo from '../../assets/logo.png'


async function loginUser(credentials) {
  return axios.post(API_URL+"auth/login", { ...credentials }, {
    headers: {'Content-Type': 'application/json'}
  })
    .then(res => {
      return res.data.accessToken
    })
    .catch(error => {
      if(error === 401) {
        Swal.fire({
          title: 'Error!',
          text: 'Wrong username or password!',
          icon: 'error',
          confirmButtonText: 'Cool, I will fix it'
        })
  
        } else if(error === 418) {
        Swal.fire({
          title: 'Error!',
          text: 'Water water water!',
          icon: 'error',
          confirmButtonText: 'loo loo loo!'
        })
 
      } else {
        Swal.fire({
          title: 'Server Error!',
          text: 'Some happened on our end, sorry',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      return null
    })
}

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if (token !== null) {
      console.log(token,"token is being set?")
      saveToken(token);
      history.push("/");
    }
  }

  return(
    <div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <img className="headelement logo" src={Logo} alt="logo"/>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p className="text-center text-3xl">Whalecum.</p>
              <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                  <div className="flex flex-col pt-4">
                      <label for="email" className="text-lg">Username</label>
                      <input type="text" onChange={e => setUserName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                  </div>

                  <div className="flex flex-col pt-4">
                      <label for="password" className="text-lg">Password</label>
                      <input type="password" onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                  </div>
                  
                  <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
              </form>
              <div className="text-center pt-12 pb-12">
                  <p>Don't have an account? <Link to="/signup" className="underline font-semibold">Sign Up</Link></p>
              </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
            <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
        </div>
      </div>
    </div>
  )
}
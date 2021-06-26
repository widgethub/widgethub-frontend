import React, { useState } from 'react';
import '../../css/Login.css';

import useToken from './useToken';
import axios from 'axios';
import { API_URL } from '../../config'
import {
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
      return null
    })

}
export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useToken();
  let history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if (token !== null) {
      console.log(token,"token is being set?")
      setToken(token);
      history.push("/");
    }
  }

  return(
    <div>
      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <img className="headelement logo" src={Logo} alt="logo"/>
          </div>

          <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p class="text-center text-3xl">Welcum.</p>
              <form class="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                  <div class="flex flex-col pt-4">
                      <label for="email" class="text-lg">Username</label>
                      <input type="text" onChange={e => setUserName(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                  </div>

                  <div class="flex flex-col pt-4">
                      <label for="password" class="text-lg">Password</label>
                      <input type="password" onChange={e => setPassword(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                  </div>
                  
                  <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
              </form>
              <div class="text-center pt-12 pb-12">
                  <p>Don't have an account? <a href="register.html" class="underline font-semibold">Register here.</a></p>
              </div>
          </div>
        </div>
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
        </div>
      </div>
    </div>
  )
}
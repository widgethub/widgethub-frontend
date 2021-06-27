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




export default function Login() {
  const [usernamered, setUsernameRed] = useState(false);
  const [passwdred, setPasswordRed] = useState(false);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();

  async function loginUser(credentials) {
    return axios.post(API_URL+"auth/login", { ...credentials }, {
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => {
        return res.data.accessToken
      })
      .catch(error => {
        if(error === 401) {
          setPasswordRed(true)
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
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col pt-4">
            <input type="text" onChange={e => {setUsernameRed(false); setUserName(e.target.value)}} placeholder="Username" className={`${usernamered === true? 'border-red-500 bg-red-50 placeholder-red-400': ''} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline`}/>
        </div>

        <div className="flex flex-col pt-4">
            <input type="password" onChange={e => {setPasswordRed(false); setPassword(e.target.value)}} placeholder="Password" className={`${passwdred === true? 'border-red-500 bg-red-50 placeholder-red-400': ''} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline`}/>
        </div>
          
        <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
      </form>
      <div className="text-center pt-12 pb-12">
          <p>Don't have an account? <Link to="/signup" className="underline font-semibold">Sign Up</Link></p>
      </div>
    </div>
  )
}
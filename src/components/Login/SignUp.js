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


export default function SignUp() {
    const [usernamered, setUsernameRed] = useState(false);
    const [passwdred, setPasswordRed] = useState(false);

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();

    async function signupUser(credentials) {
      return axios.post(API_URL+"auth/register", { ...credentials }, {
        headers: {'Content-Type': 'application/json'}
      })
        .then(res => {
          alert("Account Successfully Created!");
          return res.data.accessToken
        })
        .catch(error => {
          if(error === 409) {
            setUsernameRed(true)
          } else if(error === 418) {
            Swal.fire({
              title: 'Error!',
              text: 'What do you call a snake with no legs',
              icon: 'error',
              confirmButtonText: '...'
            })
   
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Either something happened on your end or it is us',
              icon: 'error',
              confirmButtonText: 'I see...'
            })
          }
          return null
        })
    }

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await signupUser({
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
            
            <input type="submit" value="Sign Up" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
        </form>
        <div className="text-center pt-12 pb-12">
            <p>Already an account? <Link to="/login" className="underline font-semibold">Log In</Link></p>
        </div>
    </div>
    )
  }
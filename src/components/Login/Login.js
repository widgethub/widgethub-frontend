import React, { useState } from 'react';
import '../../css/Login.css';

import useToken from './useToken';
import axios from 'axios';
import { API_URL } from '../../config'
import {
  useHistory
} from "react-router-dom";


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
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
          <button type="signup">Sign Up</button>
        </div>
      </form>
    </div>
  )
}
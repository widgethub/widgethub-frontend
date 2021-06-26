import React, { useState } from 'react';
import '../../css/Login.css';
import useToken from './useToken';
import {
  withRouter
} from "react-router-dom";


async function loginUser(credentials) {
  /*
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 */
 return "super secret token";
 }
export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useToken();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
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
        </div>
      </form>
    </div>
  )
}
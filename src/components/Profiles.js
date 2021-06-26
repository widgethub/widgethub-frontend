import React from 'react';
import '../css/Profiles.css';

import Login from './Login/Login';
import useToken from './Login/useToken';
export default function Profiles() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }


  return(
    <div className="login-wrapper">
      <h2>This is the profiles</h2>

    </div>
  )
}
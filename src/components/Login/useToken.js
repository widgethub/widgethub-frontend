import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    console.log(userToken)
    return userToken
  };

  const saveToken = userToken => {
    console.log(userToken);
    localStorage.setItem('token', JSON.stringify(userToken));
  };

  return {
    setToken: saveToken,
    token: getToken
  }
}
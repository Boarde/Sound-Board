import React, { useState, useEffect } from 'react';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const post_LogIn = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ allInfo: { username: username, password: password } })
    })
      .then(res => {
        setStatus(true);
        setCurrUser(username);
      })
      .catch(err => {
        console.log('Error logging in user', err);
      });
  };

  const post_SignUp = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allInfo: { username: username, password: password } })
      //const { username, password } = req.body.allInfo;
    })
      .then(res => {
        setStatus(true);
        setCurrUser(username);
      })
      .catch(err => {
        console.log('Error sign up', err);
      });
  };

  return (
    <div className="login-wrapper">
    </div>
  );
};

export default Login;
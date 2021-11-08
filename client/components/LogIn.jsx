import React, { useState, useEffect } from 'react';

const LogIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postLogIn = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allInfo : { username: username, password: password }})
    })
      .then(res => {
        props.setLoggedIn(true);
        props.setCurrUser(username);
        res.json();
      })
      .catch(err => {
        console.log("Error logging in user", err);
      });
  }

  const postSignUp = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allInfo : { username: username, password: password }})
      //const { username, password } = req.body.allInfo;
    })
      .then(res => {
        props.setLoggedIn(true);
        props.setCurrUser(username);
        res.json();
      })
      .catch(err => {
        console.log("Error sign up", err);
      });
  }


  return (
    <div className="login-wrapper">
      <form>
        <div id="username-input" style={{color:'white'}}>Username: <input onChange={e => setUsername(e.target.value)} type="text" required></input></div>
        <div id="login-input" style={{color:'white'}}>Password: <input onChange={e => setPassword(e.target.value)} type="password" required></input></div>
        <div className = "outer">
          <button className = "login-button-click" onClick={ e=> {
            e.preventDefault();
            postLogIn();
          }  }>Log In</button>
          <button className = "login-button-click" onClick={ postSignUp }>Sign Up</button>
        </div>
      </form>
    </div>
  )
  // <div className="test">LOGIN TEST</div>
}

export default LogIn;
import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import './stylesheets/styles.scss';


function App (){
  const [allSounds, setAllSounds] = useState([]);

  //useEffect is like componentDidMount
  // useEffect(() => {
  //     //fetch request to backend
  //     fetch('/all', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(),
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log('This is our data =>', data)
  //         setAllSounds(data);
  //       })
  //       .catch(err => {
  //         console.log("Error fetching request from back end");
  //       });
  // })


  return (
    //load user settings and render the board
    <div className="app-container">
      <Settings />
      <Board />
    </div>
  )

}


export default App;
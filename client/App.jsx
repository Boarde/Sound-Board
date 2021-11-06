import React, { useState, useEffect } from 'react';
import Board from './components/Board';


function App (){
  const [allSounds, setAllSounds] = useState([]);

  //useEffect is like componentDidMount
  useEffect(() => {
      //fetch request to backend
      fetch('/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then(res => res.json())
        .then(data => {
          console.log('This is our data =>', data)
          setAllSounds(data);
        })
        .catch(err => {
          console.log("Error fetching request from back end");
        });
  })


  return (
    //load user settings and render the board

    <Board />
  )

}


export default App;
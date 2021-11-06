import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Settings from './components/Settings.jsx';
import './stylesheets/styles.scss';


function App (){
  const [allSounds, setAllSounds] = useState([]);
  // useEffect is like componentDidMount componentDidUnmount
  useEffect(() => {
      //fetch request to backend
      // async () => {
      //   const sounds = await fetch('/all', {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     }
      //   })
      //     .then(res => res.json())
      //     .then(data => {
      //       console.log('This is our data =>', data.rows);
      //     })
      //     .catch(err => {
      //       console.log("Error fetching request from back end");
      //     });
      //     console.log('ASYNC FETCH: ', sounds)
      //     setAllSounds(sounds);
      // }
      fetch('/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log('This is our data =>', data.rows);
          setAllSounds(data.rows);
        })
        .catch(err => {
          console.log("Error fetching request from back end");
        });
  }, []);



  return (
    //load user settings and render the board
    <div className="app-container">
      <Settings />
      <Board allSounds={ allSounds } />
    </div>
  )

}


export default App;
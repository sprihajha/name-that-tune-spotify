/*global swal*/

import React from "react";
import logo from "./logo.svg";
import loading from "./loading.svg";
import "./App.css";
import Sound from "react-sound";
import Button from "./Button";

const apiToken = "<<Copy the Spotify token here>>";

function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = getRandomNumber(counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome on the Name that Tune</h1>
      </header>
      <div className="App-images">
        <p>Changed the code to run a real game!</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;

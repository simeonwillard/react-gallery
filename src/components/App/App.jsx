import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  // lets make fetch happen
  const fetchGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    })
    .catch(function (error) {
      console.log('Error in get: ', error);
    });
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;

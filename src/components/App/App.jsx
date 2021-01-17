import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

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

  // updating like count
  const likeButton = (gallery) => {
    axios.put(`/gallery/like/${gallery.id}`, {
        likes: gallery.likes++
    })
    .then((response) => {
      fetchGallery();
    })
    .catch((error) => {
      alert('error in liking ', error)
    })
  }


  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      {/* <img src="images/goat_small.jpg" /> */}
        <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;

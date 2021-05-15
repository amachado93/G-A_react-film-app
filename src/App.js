import React, { Component } from 'react';
import './App.css';

import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB.js';

class App extends Component {
    
  render() {
      

    return (
      <div className="film-library">
        <FilmListing filmList={TMDB.films} />
        <FilmDetails filmDetails={TMDB.films}/>
      </div>
    );
  }
}

export default App;

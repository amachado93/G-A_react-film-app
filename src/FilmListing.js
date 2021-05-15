import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    render(){
        
        
        
        let allFilms = this.props.filmList.map((film, index) =>
        <FilmRow 
            title={film.title}
            year={film.release_date}
            key={film.id}
            pos={index}
        />
        )
        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                
                {allFilms}
                
            </div>
        )
    }
}

export default FilmListing;
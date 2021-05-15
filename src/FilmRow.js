import React, { Component } from 'react';

class FilmRow extends Component {
    render(){

        let justYear = new Date(this.props.year);
        let posterUrl = 'https://image.tmdb.org/t/p/w780/' + this.props.poster;

        return(
            <div className="film-row">
                <img src={posterUrl} />
                <div className="film-summary">
                    <h1>{this.props.title}</h1>
                    <p>{justYear.getFullYear()}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;
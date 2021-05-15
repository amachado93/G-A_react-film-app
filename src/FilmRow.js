import React, { Component } from 'react';

class FilmRow extends Component {
    render(){

        let newYear = new Date(this.props.year);

        return(
            <div className="film-row">
                <img src="#" />
                <div className="film-summary">
                    <h1>{this.props.title}</h1>
                    <p>{newYear.getFullYear()}</p>
                </div>
            </div>
        )
    }
}

export default FilmRow;
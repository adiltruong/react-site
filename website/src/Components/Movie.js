import React, { Component } from 'react';
import Popup from "reactjs-popup";
const axios = require('axios');

export default class Movie extends Component {

 constructor(props) {
     super(props);

     this.state = {
       movies : []
     };
 }

 getMovies() {
     const ids = ["tt5323662", "tt0063442", "tt0988824", "tt10850932", "tt11239552", "tt1700841", "tt4633694", "tt6751668", "tt9335498", "tt3398540"];
     for(const id of ids) {
         axios({
             method: 'get',
             url: "http://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(id),
         })
         .then(
             (response) => {
                 this.setState(state => {
                     return {movies: [...this.state.movies, response.data]};
                 })
             }
         )
     }
 }

 componentWillMount() {
     this.getMovies()
 }

 render() {
   console.log(this.state.movies[0])
      const movies = this.state.movies.map(m =>
          <Popup className="popup" trigger={<img className="movie-item" alt={m.Title} src={m.Poster}/>} modal closeOnDocumentClick lockScroll postion="center center">
              <div className="movie-popup">
                  <img className="movie-poster" src={m.Poster}/>
                  <div className="movie-info">
                      <h1>{m.Title}</h1>
                      <p>IMDB Rating: {m.imdbRating}</p>
                      <p><b>Director:</b> {m.Director}</p>
                      <p><b>Released:</b> {m.Released}</p>
                      <p><b>Synopsis:</b> {m.Plot}</p>
                  </div>
              </div>
          </Popup>
      )
      return(
        <div>
                <h1>
                  Movies
                </h1>
                {movies}
            </div>
     );
 }
}

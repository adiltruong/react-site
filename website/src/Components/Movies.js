import React, { Component } from 'react'
import MovieModal from './MovieModal'
import ImdbMovie from './ImdbMovie'

export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            activeMovie: 'None',
            movieClicked: false
        }

        this.changeActiveMovie = (movieName) => {
            console.log("changed active state")
            this.setState ({
                activeMovie: movieName,
                movieClicked: true
            })
        }
    }

    render() {

        const movies = [ "tt0325980", "tt0087469", "tt0816692", "tt4633694", "tt1211837", "tt8946378", "tt5311514", "tt1375666"];

        const movieList = movies.map ((movie) => (
            <ImdbMovie handleClick={this.changeActiveMovie.bind(this)} key={movie} movieID={movie}></ImdbMovie>
        ));

        return (
            <div id="main-body">
                <div id="movie-list" className="movie-list">
                    {movieList}
                </div>

               <MovieModal/>

		    </div>
        )
    }
}

import React, { Component } from 'react';
import About from './About';
import Experiences from './Experiences';
import Gallery from './Gallery';
import Contact from './Contact';
import Guestbook from './Guestbook';
import Movie from './Movie'
import MovieList from './MovieList'

export class Body extends Component {
  displayContent = () => {
    var activePage = this.props.activeTab;
    if (activePage === 1) {
      return <About/>
    } else if (activePage === 2) {
      return <Experiences/>
    } else if (activePage === 3) {
      return <Gallery/>
    } else if (activePage === 4) {
      return <Contact/>
    } else if (activePage === 5) {
      return <Guestbook/>
    } else if (activePage === 6){
      return <Movie/>
    } else {
      return <MovieList/>
    }
  }
  render() {
    return (
      this.displayContent()
    );

  }
}

export default Body;

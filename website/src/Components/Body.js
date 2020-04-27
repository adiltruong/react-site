import React, { Component } from 'react';
import About from './About';
import Experiences from './Experiences';
import Gallery from './Gallery';
import Contact from './Contact';

export class Body extends Component {
  displayContent = () => {
    var activePage = this.props.activeTab;
    if (activePage === 1) {
      return <About/>
    } else if (activePage === 2) {
      return <Experiences/>
    } else if (activePage === 3) {
      return <Gallery/>
    } else {
      return <Contact/>
    }
  }
  render() {
    return (
      this.displayContent()
    );

  }
}

export default Body;

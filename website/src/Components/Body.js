import React, { Component } from 'react';
import About from './About';
import Experiences from './Experiences';
import Gallery from './Gallery';
import Contact from './Contact';
import Guestbook from './Guestbook';

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
    } else {
      return<Guestbook/>
    }
  }
  render() {
    return (
      this.displayContent()
    );

  }
}

export default Body;

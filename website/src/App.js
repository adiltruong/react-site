import React, {Component, useEffect} from 'react';
import Tablist from './Components/Tablist';
import Body from './Components/Body';
import './App.css'
import config from './config.js'
import ScrollUpButton from 'react-scroll-up-button'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1,
      firebaseData: {},
      shouldUpdate: false
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render(){
      const tabs = [
      {
        id: 1,
        title: 'About'
      },
      {
        id:2,
        title: 'Experiences'
      },
      {
        id:3,
        title:  'Gallery'
      },
      {
        id: 4,
        title: 'Contact'
      },
      {
        id: 5,
        title: 'Guestbook'
      },
      {
        id: 6,
        title: 'Movie List'
      }
  ]

    return (
      <div className="body">
        <div className="nav-bar">
          <Tablist className="tab" tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}/>
        </div>
        <div className = "main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>
        <div>
		      <ScrollUpButton />
	      </div>
      </div>
    )
  }
}

export default App;

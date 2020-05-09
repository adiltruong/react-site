import React, {Component, useEffect} from 'react';
import Tablist from './Components/Tablist';
import Body from './Components/Body';
import './App.css'
import config from './config.js'
import ScrollUpButton from 'react-scroll-up-button'
const firebase = require('firebase')

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

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

    let ref = firebase.database().ref('guestBookData')
    ref.on('value', snapshot => {
      const data = snapshot.val()
      this.setState({firebaseData: data})
      console.log(data)
    })

  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.shouldUpdate !== prevState.shouldUpdate){
      let ref = firebase.ref('guestBookData')
      ref.on('value', snapshot => {
        const data = snapshot.val()
        this.setState({firebaseData: data})
        console.log(data)
      })
    }
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

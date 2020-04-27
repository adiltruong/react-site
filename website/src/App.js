import React, {Component} from 'react';
import Tablist from './Components/Tablist';
import Body from './Components/Body';
import './App.css'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
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
      }
  ]
    return (
      <div className="body">
        <div className="nav-bar">
          <Tablist tabs={tabs}
          changeTab={this.changeTab}
          activeTab={this.state.activeTab}/>
        </div>
        <div className = "main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>
      </div>
    )
  }
}

export default App;

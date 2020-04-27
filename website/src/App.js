import React from 'react';
import logo from './logo.svg';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ScrollUpButton
        StopPosition = {0}
        ShowAtPosition = {150}
        ContainerClass="ScrollUpButton_Container"
        TransitionClassName="ScrollUpButton_Toggled"
        style = {{display: "none",
                 position: "fixed",
                 bottom: "20px",
                 right: "30px",
                 zIndex: "99",
                 fontSize: "18px",
                 border: "none",
                 outline: "none",
                 backgroundColor: "green",
                 color: "white",
                 cursor: "pointer",
                 padding: "15px",
                 borderRadius: "4px"}}
          />
      </header>
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from "./favorite.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };
    const defaultOptions = {animationData: animationData};
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-lottie demo</h2>
          <p>using custom lottie file from <a href="https://www.lottiefiles.com">here</a></p>
        </div>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
        <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
        <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
      </div>
    );
  }
}

export default App;

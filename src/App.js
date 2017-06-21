import React, { Component } from 'react';
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
          <h3><a href="https://github.com/gnarmis/lottie-web-demo">react-lottie demo</a></h3>
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

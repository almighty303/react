import React, { Component, Stylesheet } from 'react';
import ReactDOM from 'react-dom'
import styler from 'react-styling'

class PartClock extends Component {
  constructor(props){
    super(props);
    this.state={
      date: new Date().toLocaleTimeString(),
      showTimer: true,
      buttonText: 'hide'
    }
  }
  setDate(){
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  };
  componentDidMount(){
    this.timerID = setInterval(
      () => this.setDate(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div id="timerContainer" >
        <span id="timerSpan">It is {this.state.date}.</span>
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props){
    super(props);
    this.state={
      showTimer: true
    }
  }

  onClick() {
    this.setState(prevState => ({
      showTimer: !prevState.showTimer
    }));
  }

  render(){
      return (
        <div>
          {this.state.showTimer ? <PartClock/> : null}
          <button onClick={(e) => this.onClick(e)} >
            {this.state.showTimer ? 'Hide timer' : 'Show timer'}
          </button>
        </div>
      )
  }

}

export default Clock;

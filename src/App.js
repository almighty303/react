import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import List from './List';
import Todo from './Todo';
import './App.css';

const user = {
  name: 'Pasha',
  age: 25,
  imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/293/1d2/0f729d6.jpg'
};

var footer1 = (
  <div>
    <img src={user.imageUrl}/>
    <p>How are you doing?))</p>
  </div>
);

function formatName(user) {
  return 'Hi, ' + user.name + '! You are ' + user.age;
}

function Footer(props) {
  //alert(props.name);
  return <h1>Hello, {props.name}</h1>;
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="leftSection">
          {formatName(user)}
          {footer1}
        </div>
        <div id="rightSection">
          <Footer name="Pasha" />
          <Clock/>
          <Todo/>
        </div>
      </div>

    );
  }
}

export default App;

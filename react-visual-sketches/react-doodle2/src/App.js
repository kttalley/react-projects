import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Head extends React.Component {
  render () {
    return <div className="head"></div>;
  }
}
class Box extends React.Component {
  render () {
    return <div id="head-target"></div>;
  } 
}

class Foot extends React.Component {
  render () {
    return <div id="foot-target"></div>;
  }
}

// class Body extends React.Component {
//   render () {
//     return <div className = "body"></div>;
//   }
// }
// export default Box;
export default Head;

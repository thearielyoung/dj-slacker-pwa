import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './Users/Users';
import Songs from './Songs/Songs'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
        <hr/>
        <Songs />
      </div>
    );
  }
}

export default App;

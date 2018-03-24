import React, { Component } from 'react';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <header className="App-header">
          <h1 className="App-title">NYT Article Search</h1>
          <br/>
          <p className="App-intro">
          Search and save all your favorite articles from the New York Times
        </p>
        </header>
      </div>
    );
  }
}

export default Header;
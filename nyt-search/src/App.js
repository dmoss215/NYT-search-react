import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBox from './components/searchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <SearchBox />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="search-box">
          <h1 className="search-title">Search</h1>
          <br/>
        <form>
            <div class="form-group">
              <label for="topic-input"><h3>Topic</h3></label>
              <input type="text" id="topic-input" class="form-control" placeholder="Enter topic" />
            </div>
            <div class="form-group">
              <label for="start-year"><h3>Start Year</h3></label>
              <input type="text" id="start-year" class="form-control" placeholder="year" />
            </div>
            <div class="form-group">
              <label for="end-year"><h3>End Year</h3></label>
              <input type="text" id="end-year" class="form-control" placeholder="year" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Header;
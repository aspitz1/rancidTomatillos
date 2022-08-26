import React, { Component } from 'react';
import AllMovies from '../All-Movies/All-Movies';
import movieData from '../movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }
render() {
  return (
    <div className="App">
      <AllMovies />
    </div>

  );
}
}

export default App;
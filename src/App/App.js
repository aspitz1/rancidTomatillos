import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import { getAllMovies } from '../api-calls/apiCalls'
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
      .then(response => response.json())
      .then(data => this.setState({... this.state, movies: data.movies }))
  }

  makeUpperCase = (string) => string.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');

  findMovieByTitle = (title) => {
    const formattedTitle = this.makeUpperCase(title);
    const movie = this.state.movies.find(movie => movie.title === formattedTitle);
    if (movie) {
      this.viewMovie(movie.id);
      return
    }

    this.setState({ ...this.state, error: 'Looks like we where unable to find that title.' });
  }
 
  render() {
    return (
      <div className="App">
        <Navbar 
          view={this.state.isMovieView} 
          findMovieByTitle={this.findMovieByTitle}
        />
        {this.state.error && <h3 className='error'>{this.state.error}</h3>}
          <Route exact path='/' render={() => <AllMovies movies={this.state.movies}/>}/>
          <Route exact path='/:id' render={({ match }) => <Movie id={match.params.id} />}/>
      </div>
    );
  }
}

export default App;
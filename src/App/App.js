import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import { getAllMovies } from '../api-calls/apiCalls'
import './App.css';
import { Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      selectedMovie: ''
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
    this.setState({selectedMovie: movie.id})
    return movie
  }
 
  render() {
    return (
      <div className="App">
        <Navbar 
          view={this.state.isMovieView} 
          findMovieByTitle={this.findMovieByTitle}
          id={this.state.selectedMovie}
        />
        {this.state.error && <h3 className='error'>{this.state.error}</h3>}
          <Route exact path='/' render={() => <AllMovies movies={this.state.movies}/>}/>
          <Route exact path='/:id' render={({ match }) => <Movie id={match.params.id} />}/>
          <Redirect to={`/${this.state.selectedMovie}`} render={() => <Movie id={this.state.selectedMovie} />}/>
      </div>
    );
  }
}

export default App;
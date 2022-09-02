import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import { getAllMovies } from '../api-calls/apiCalls'
import './App.css';
import { Route, Switch } from 'react-router-dom';

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
      .then(data => this.setState({...this.state, movies: data.movies }))
  }

  makeUpperCase = (string) => string.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');

  findMovieByTitle = (title) => {
    const formattedTitle = this.makeUpperCase(title);
    const movie = this.state.movies.find(movie => movie.title === formattedTitle);
    if (movie) {
      return movie.id;
    } else {
      return false;
    }
  }
 
  hoverMovie = (id) => {
    let info = this.state.movies.find((movie) => movie.id === id);
    this.setState({...this.state, movie: {
      id: info.id, 
      title: info.title,
      releaseDate: info.release_date,
      averageRating: info.average_rating
    }})

  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Navbar 
          view={this.state.isMovieView} 
          findMovieByTitle={this.findMovieByTitle}
          resetSelectedMovie={this.resetSelectedMovie}
          id={this.state.selectedMovie}
        />
        {this.state.error && <h3 className='error'>{this.state.error}</h3>}
        <Switch>
          <Route exact path='/' render={() => <AllMovies movies={this.state.movies}/>}/>
          <Route exact path='/:id' render={({ match }) => <Movie id={match.params.id}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
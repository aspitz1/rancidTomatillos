import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import { getAllMovies } from '../api-calls/apiCalls'
import './App.css';
import { Route, Redirect } from 'react-router-dom';

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
    if (movie) {
      this.setState({...this.state, selectedMovie: movie.id});
    } else {
      this.setState({ ...this.state, error: 'Sorry, looks like we can\'t find that title.' })
    }
  }

  resetSelectedMovie = () => {
    this.setState({...this.state, selectedMovie: ''});
  }

  resetError = () => {
    this.setState({...this.setState, error: ''})
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
    return (
      <div className="App">
        <Navbar 
          view={this.state.isMovieView} 
          findMovieByTitle={this.findMovieByTitle}
          resetSelectedMovie={this.resetSelectedMovie}
          id={this.state.selectedMovie}
        />
        {this.state.error && <h3 className='error'>{this.state.error}</h3>}
          <Route exact path='/' render={() => <AllMovies movies={this.state.movies}/>}/>
          <Route exact path='/:id' render={({ match }) => <Movie id={match.params.id} resetError={this.resetError} />}/>
          <Route exact path='/'>
            {
              this.state.selectedMovie ? 
              <Redirect push to={`/${this.state.selectedMovie}`} render={() => <Movie id={this.state.selectedMovie} />}/> 
              : <AllMovies movies={this.state.movies} />
            }
          </Route>
      </div>
    );
  }
}

export default App;
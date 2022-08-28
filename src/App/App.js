import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import { getMovie } from '../api-calls/apiCalls'
import { getAllMovies } from '../api-calls/apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMovieView: false,
      movies: [],
      movie: {
        id: '',
        title: '',
        posterPath: '',
        backdropPath: '',
        releaseDate: '',
        overview: '',
        genres: '',
        budget: '',
        revenue: '',
        runtime: '',
        tagline: '',
        averageRating: '',
        error: ''
      }
    }
  }

  goHome = () => {
    this.setState({ ...this.state, isMovieView: false });
  }

  componentDidMount() {
    getAllMovies()
      .then(response => response.json())
      .then(data => this.setState({... this.state, movies: data.movies }))
  }

  viewMovie = (id) => {
      getMovie(id)
        .then(response => response.json())
        .then(data => {
          this.setState({...this.state, isMovieView: true, movie: {
            id: data.movie.id,
            title: data.movie.title,
            posterPath: data.movie['poster_path'],
            backdropPath: data.movie['backdrop_path'],
            releaseDate: data.movie['release_date'],
            overview: data.movie.overview,
            genres: data.movie.genres,
            budget: data.movie.budget,
            revenue: data.movie.revenue,
            runtime: data.movie.runtime,
            tagline: data.movie.tagline,
            averageRating: data.movie['average_rating'],
            error: ''
          }})
        })
        .catch(err =>{
          console.log(err)
          this.setState({ ...this.state, movie: {...this.state.movie, error: 'Looks like something went wrong.'} })
        })
  }
 
  render() {
    return (
      <div className="App">
        <Navbar 
          view={this.state.isMovieView} 
          goHome={ this.goHome }
        />
        {this.state.movie.error && <h3 style={{ color: 'red', textAlign: 'center' }}>{this.state.movie.error}</h3>}
        {this.state.isMovieView || <AllMovies movies={this.state.movies} switchView={this.viewMovie}/>}
        {this.state.isMovieView && <Movie movieDetails={this.state.movie}/>}
      </div>
    );
  }
}

export default App;
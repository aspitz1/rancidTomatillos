import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import movieData from '../movieData';
import { getMovie } from '../api-calls/apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMovieView: false,
      movies: movieData.movies,
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

  viewMovie = (id) => {
      getMovie(id)
        .then(response => response.json())
        .then(data => {
          this.setState({...this.state, isMovieView: true, movie: {
            ...this.state.movie,
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
            averageRating: data.movie['average_rating']
          }})
        })
  }
 
  render() {
    return (
      <div className="App" 
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <Navbar 
          view={this.state.isMovieView} 
          goHome={ this.goHome }
        />
        {this.state.isMovieView || <AllMovies movies={this.state.movies} switchView={this.viewMovie}/>}
        {this.state.isMovieView && <Movie movieDetails={this.state.movie}/>}
      </div>
    );
  }
}

export default App;
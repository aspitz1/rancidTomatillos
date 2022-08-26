import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Movie from '../Movie/Movie';
import AllMovies from '../All-Movies/All-Movies';
import movieData from '../movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMovieView: false,
      movies: movieData.movies,
      movie: {
        id: 539885,
        title: 'Ava',
        posterPath: 'https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
        backdropPath: 'https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
        releaseDate: '2020-07-02',
        overview: 'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
        genres: [
          'Action',
          'Crime',
          'Drama',
          'Thriller'
        ],
        budget: 0,
        revenue: 152812,
        runtime: 96,
        tagline: 'Kill. Or be killed.',
        averageRating: 5.875
      }
    }
  }

  goHome = () => {
    this.setState({ ...this.state, isMovieView: false });
  }
 
  render() {
    return (
      <div className="App">
      
        <Navbar 
          view={this.state.isMovieView} 
          goHome={ this.goHome }
        />
        {/* <AllMovies movies={this.state.movies}/> */}
        {this.state.isMovieView && <Movie movieDetails={this.state.movie}/>}
      </div>
    );
  }
}

export default App;
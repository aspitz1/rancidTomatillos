import React, { Component } from 'react';
import { getMovie } from '../api-calls/apiCalls';
import './Movie.css'

class Movie extends Component {
    constructor() {
        super();
            this.state = {
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
            averageRating: ''
        },
         fetchedMovies: [],
         error: ''
        }
    }

    findMovieById = (id) => {
        return this.state.fetchedMovies.find(movie => movie.id === id);
    }

    viewMovie = (id) => {
        const movie = this.findMovieById(id);
        if(movie) {
        this.setState({
                ...this.state, 
                isMovieView: true,
                error: '',
                movie: {
                id: movie.id,
                title: movie.title,
                posterPath: movie['poster_path'],
                backdropPath: movie['backdrop_path'],
                releaseDate: movie['release_date'],
                overview: movie.overview,
                genres: movie.genres,
                budget: movie.budget,
                revenue: movie.revenue,
                runtime: movie.runtime,
                tagline: movie.tagline,
                averageRating: movie['average_rating']
            }})
        this.props.resetError();
        return;
    }

    getMovie(id)
      .then(response => response.json())
      .then(data => {
        console.log();
        this.setState({...this.state, 
          isMovieView: true,
          fetchedMovies: [...this.state.fetchedMovies, data.movie],
          error: '',
          movie: {
          id: data.movie.id,
          title: data.movie.title,
          posterPath: data.movie['poster_path'],
          backdropPath: data.movie['backdrop_path'],
          releaseDate: data.movie['release_date'],
          overview: data.movie.overview,
          genres: data.movie.genres.join(' | '),
          budget: data.movie.budget,
          revenue: data.movie.revenue,
          runtime: data.movie.runtime,
          tagline: data.movie.tagline,
          averageRating: data.movie['average_rating'].toFixed(1)
        }})
        this.props.resetError();
      })
      .catch(err =>{
        console.log(err)
        this.setState({ ...this.state, error: 'Looks like something went wrong.' })
      })
    }

    componentDidMount() {
        this.viewMovie(this.props.id)
    }

    releaseDateFormatted = () => new Date(this.state.movie.releaseDate).toLocaleDateString('en-US');
    
    render() {
        return (
            <div>
            { this.state.error && <p>{this.state.error}</p> }
            { 
                this.state.error ||
                <div className='movie-container'>
                    <div className='movie-heading-container' 
                        style={{
                            backgroundImage: `url(${this.state.movie.backdropPath})`, 
                            backgroundSize: '70%',
                            backgroundRepeat: 'no-repeat',
                            boxShadow: 'inset 30vw -20px 40px black',
                            backgroundPosition: 'right 20%'
                        }}>
                        <div className='movie-heading-description-container'>
                            <h2>{this.state.movie.title}</h2>
                            <ul className="movie-heading-details">
                                <li>Average Rating: {this.state.movie.averageRating}/10</li>
                                <li><span className='no-wrap'>{this.state.movie.genres}</span> <span className='no-wrap'>Released: {this.releaseDateFormatted(this.state.movie.releaseDate)}</span></li>
                                <li><span className='no-wrap'>{this.state.movie.runtime} Minutes</span></li>
                                <li><span className='no-wrap'>Budget: ${this.state.movie.budget.toLocaleString('en-US')}</span></li>
                                <li><span className='no-wrap'>Revenue: ${this.state.movie.revenue.toLocaleString('en-US')}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="movie-description-container">
                        <div>
                            {this.state.movie.tagline && <h3 className="tagline">{this.state.movie.tagline}</h3>}
                            <p className='description'>{this.state.movie.overview}</p>
                        </div>
                        <img className='poster-movie-view' src={this.state.movie.posterPath} />
                    </div>
                </div>
            }
            </div>
        )
    }
    
}

export default Movie;
import React, { Component } from 'react';
import { getMovie } from '../api-calls/apiCalls';
import './Movie.css'

class Movie extends Component {
    constructor(props) {
        super(props);
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
         error: '',
         location: props.location
        }
    }

    viewMovie = (id) => {
    getMovie(id)
      .then(response => response.json())
      .then(data => {
        this.setState({...this.state, 
          isMovieView: true,
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
      })
      .catch(err =>{
        console.log(err)
        this.setState({ ...this.state, error: 'Looks like something went wrong.' })
      })
    }

    componentDidMount() {
        this.viewMovie(this.props.id)
    }

    componentDidUpdate() {
        if (this.state.location !== this.props.location) {
            this.viewMovie(this.props.location)
        }
    }

    releaseDateFormatted = () => new Date(this.state.movie.releaseDate).toLocaleDateString('en-US');
    
    render() {
        return (
            <div>
            { 
                this.state.error? 
                <div className='error error-movie'>
                <p>{this.state.error}</p>
                </div> :
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
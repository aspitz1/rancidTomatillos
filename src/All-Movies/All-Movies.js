import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './All-Movies.css'

const AllMovies = ({movies, switchView, onHover}) => {
    const moviePosters = movies.map(movie => {
        return (
            <MovieCard
                key={movie.id}
                movieDetails={movie}
                switchView={switchView}
                onHover={onHover} 
            />
        )
    })
    return (
        <div className='movies-container'>
            {moviePosters}
        </div>
    )
}

export default AllMovies;
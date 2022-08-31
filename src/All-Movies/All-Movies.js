import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './All-Movies.css'
import { NavLink } from 'react-router-dom'

const AllMovies = ({movies}) => {
    const moviePosters = movies.map(movie => {
        return (
            <MovieCard
                key={movie.id}
                id={movie.id} 
                title={movie.title}
                poster={movie.poster_path}
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
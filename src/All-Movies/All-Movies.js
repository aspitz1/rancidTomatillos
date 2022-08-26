import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'

const AllMovies = ({movies}) => {
    console.log(movies)
    const moviePosters = movies.map(movie => {
        return (
            <MovieCard
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
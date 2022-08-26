import React from 'react'
import Movie from '../Movie/Movie'

const AllMovies = (movies) => {
    console.log(movies)
    const moviePosters = movies.map(movie => {
        return (
            <Movie
                id={movie.id} 
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.average_rating}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
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
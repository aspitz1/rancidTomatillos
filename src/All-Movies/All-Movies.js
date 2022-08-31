import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './All-Movies.css'


const AllMovies = ({movies}) => {
    console.log(movies);
    const moviePosters = movies.map(movie => {
        return (
            <MovieCard
                key={movie.id}
                id={movie.id} 
                title={movie.title}
                poster={movie.poster_path}
                averageRating={movie.average_rating}
                releaseDate={movie.release_date}
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
import React from 'react'
import MovieCard from '../Movie-Card/Movie-Card'
import './All-Movies.css'

<<<<<<< HEAD
const AllMovies = ({movies}) => {
=======
const AllMovies = ({movies, switchView, onHover}) => {
>>>>>>> main
    const moviePosters = movies.map(movie => {
        return (
            <MovieCard
                key={movie.id}
<<<<<<< HEAD
                id={movie.id} 
                title={movie.title}
                poster={movie.poster_path}
=======
                movieDetails={movie}
                switchView={switchView}
                onHover={onHover} 
>>>>>>> main
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
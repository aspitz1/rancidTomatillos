import React from 'react'
import './Movie-Card.css'
const MovieCard = ({ movieDetails, switchView}) => {
    const {
        title, posterPath, id, releaseDate, overview,
        genres, budget, revenue, runtime, tagline, averageRating
    } = movieDetails;
    return <article  key={id} style={{ backgroundImage: `url(${posterPath})`}} id={id} name={title} alt={title} className='movie-card' onClick={() => switchView(id)}>
        <h3>{title}</h3>
        <ul>
            <li className='release'>{releaseDate}</li>
            <li className='rating'>{averageRating}</li>
            <li className='genres'>{genres}</li>
        </ul>
    </article>
}
export default MovieCard;
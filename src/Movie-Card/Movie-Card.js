import React from 'react'

const MovieCard = ({ movieDetails, switchView, onHover }) => {
    const {
        title, posterPath, id, releaseDate, overview,
        genres, budget, revenue, runtime, tagline, averageRating
    } = movieDetails;
    return <article key={id} style={{ backgroundImage: `url(${posterPath})`}} id={id} name={title} alt={title} className='movie-card' onClick={() => switchView(id)} onMouseOver={() => onHover(id)}>
        <h3>{title}</h3>
        <ul>
            <li>{releaseDate}</li>
            <li>{averageRating}</li>
            <li>{genres}</li>
        </ul>
    </article>
}
export default MovieCard;
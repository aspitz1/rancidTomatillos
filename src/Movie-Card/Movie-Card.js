import React from 'react'
import './Movie-Card.css'
const MovieCard = ({ movieDetails, switchView}) => {
    const {
        title, poster_path, id, release_date, average_rating
    } = movieDetails;

    const releaseDate = new Date(release_date).toLocaleDateString('en-US')
    const avgRating = average_rating.toFixed(1)
    return <article  key={id} id={id} name={title} alt={title} className='movie-card' onClick={() => switchView(id)}>
                <img className='background' src={poster_path} alt={title} height='300' width='200'></img>

                <div className='hidden'>

                    <h3>{title}</h3>
                    <label for='release'>Released:
                        <p className='text' id='release'>{releaseDate}</p>
                    </label>
                    <label for='rating'>Rating:
                        <p className ='text' id='rating'>{avgRating}/10</p>
                    </label>
                </div>

            </article>
}
export default MovieCard;
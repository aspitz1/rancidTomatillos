import React from 'react'
import './Movie-Card.css'
const MovieCard = ({ movieDetails, switchView}) => {
    const {
        title, poster_path, id, release_date, average_rating
    } = movieDetails;

    const releaseDate = new Date(release_date).toLocaleDateString('en-US')
    const avgRating = average_rating.toFixed(1)
    const backgroundImage = poster_path;
    return <article key={id} id={id} name={title} alt={title} className='movie-card' onClick={() => switchView(id)} 
    style={{height: '300px', width: '200px', backgroundImage: `url(${backgroundImage})`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',}}>
                <div className='hidden'>

                    <h3>{title}</h3>
                    <label>Released:
                        <p className='text' id='release'>{releaseDate}</p>
                    </label>
                    <label>Rating:
                        <p className ='text' id='rating'>{avgRating}/10</p>
                    </label>
                </div>

            </article>
}
export default MovieCard;
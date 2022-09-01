import React from 'react'
import { Link } from 'react-router-dom';
import './Movie-Card.css'

const MovieCard = ({ id, title, poster, averageRating, releaseDate }) => {
    const formattedReleaseDate = new Date(releaseDate).toLocaleDateString('en-US')
    const avgRating = averageRating.toFixed(1)
    return <Link to={'/' + id} id={id} name={title} alt={title} className='movie-card' 
    style={{ backgroundImage: `url(${poster})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', textDecoration: 'none'}}>
                <div className='screen'>
                    <h3>{title}</h3>
                    <label>Released:
                        <p className='text' id='release'>{formattedReleaseDate}</p>
                    </label>
                    <label>Rating:
                        <p className ='text' id='rating'>{avgRating}/10</p>
                    </label>
                    </div>
            </Link>
}
export default MovieCard;
import React from 'react'
import './Movie-Card.css'

const MovieCard = ({ id, title, poster }) => {
    return <img key={id} src={poster} id={id} name={title} alt={title} className='movie-card' height='300' width='200'/>
}

export default MovieCard;
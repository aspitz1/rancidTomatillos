import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, poster }) => {
    return <Link to={'/' + id}><img key={id} src={poster} id={id} name={title} alt={title} className='movie-card' height='300' width='200'/></Link>
}

export default MovieCard;
import React from 'react'

const MovieCard = ({ id, title, poster }) => { 
    return <img key={id} src={poster} id={id} name={title} alt={title} />
}

export default MovieCard;
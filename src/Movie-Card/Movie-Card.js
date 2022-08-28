import React from 'react'

const MovieCard = ({ id, title, poster, switchView }) => {
    return <img key={id} src={poster} id={id} name={title} alt={title} className='movie-card' height='300' width='200' onClick={() => switchView(id)}/>
}

export default MovieCard;
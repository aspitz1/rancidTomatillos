import React from 'react'

const Movie = ({ id, title, releaseDate, rating, poster, backdrop}) => {

return <img src={poster} id={id} name={title} alt={[releaseDate, rating, backdrop]}/>
}

export default Movie;
const getMovie = (endpoint) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${endpoint}`)
}

const getAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
}

export { getAllMovies }
export { getMovie }
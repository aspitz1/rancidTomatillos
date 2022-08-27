const getMovie = (endpoint) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${endpoint}`)
}

export { getMovie }
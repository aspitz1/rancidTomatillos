import './Movie.css'

const Movie = ({ movieDetails }) => {
    const {
        title, posterPath, backdropPath, releaseDate, overview,
        genres, budget, revenue, runtime, tagline, averageRating
    } = movieDetails;

    const releaseDateFormatted = new Date(releaseDate).toLocaleDateString('en-US');
    
    return (
        <div className='movie-container'>
            <div className='movie-heading-container' 
                style={{backgroundImage: `url(${backdropPath})`, 
                backgroundSize: 'cover',
                boxShadow: 'inset 40vw 10px 100px black'
            }}>
                <h2>{title}</h2>
                <ul className="movieHeadingDetails">
                    <li>Average Rating: {averageRating.toFixed(2)}</li>
                    <li>{genres.join(' | ')} Released: {releaseDateFormatted}</li>
                    <li>{runtime} Minutes</li>
                    <li>Budget: ${budget.toLocaleString('en-US')}</li>
                    <li>Revenue: ${revenue.toLocaleString('en-US')}</li>
                </ul>
            </div>
            <div className="movie-description-container">
                <div>
                    {tagline && <h3 className="tagline">{tagline}</h3>}
                    <p>{overview}</p>
                </div>
                <img className='poster-movie-view' src={posterPath} />
            </div>
        </div>
    )
}

export default Movie;
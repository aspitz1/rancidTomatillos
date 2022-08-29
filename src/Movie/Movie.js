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
                style={{
                    backgroundImage: `url(${backdropPath})`, 
                    backgroundSize: '70%',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: 'inset 30vw -20px 40px black',
                    backgroundPosition: 'right 20%'
                }}>
                <div className='movie-heading-description-container'>
                    <h2>{title}</h2>
                    <ul className="movie-heading-details">
                        <li>Average Rating: {averageRating.toFixed(2)}</li>
                        <li><span className='no-wrap'>{genres.join(' | ')}</span> <span className='no-wrap'>Released: {releaseDateFormatted}</span></li>
                        <li><span className='no-wrap'>{runtime} Minutes</span></li>
                        <li><span className='no-wrap'>Budget: ${budget.toLocaleString('en-US')}</span></li>
                        <li><span className='no-wrap'>Revenue: ${revenue.toLocaleString('en-US')}</span></li>
                    </ul>
                </div>
            </div>
            <div className="movie-description-container">
                <div>
                    {tagline && <h3 className="tagline">{tagline}</h3>}
                    <p className='description'>{overview}</p>
                </div>
                <img className='poster-movie-view' src={posterPath} />
            </div>
        </div>
    )
}

export default Movie;
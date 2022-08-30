import './Navbar.css'
import SearchByNameForm from '../SearchByTitleForm/SearchByTitleForm';

const Navbar = ({ view, goHome, findMovieByTitle }) => {
    return (
        <nav className='navbar'>
            <h1>Rancid Tomatillos</h1>
            {view && <button className='navbar-home' onClick={goHome}>Home</button>}
            {view || <SearchByNameForm findMovieByTitle={findMovieByTitle} />}
        </nav>
    )
}

export default Navbar;
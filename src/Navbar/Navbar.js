import './Navbar.css'
import SearchByNameForm from '../SearchByTitleForm/SearchByTitleForm';
import { NavLink } from 'react-router-dom';

const Navbar = ({ findMovieByTitle }) => {
    return (
        <nav className='navbar'>
            <h1>Rancid Tomatillos</h1>
            <NavLink exact to='/'  
            className='navbar-home'
            activeStyle = {{ opacity: '0' }}>Home</NavLink>
            <SearchByNameForm findMovieByTitle={findMovieByTitle} />
        </nav>
    )
}

export default Navbar;
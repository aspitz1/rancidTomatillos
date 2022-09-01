import './Navbar.css';
import SearchByNameForm from '../SearchByTitleForm/SearchByTitleForm';
import { NavLink } from 'react-router-dom';

const Navbar = ({ findMovieByTitle, resetSelectedMovie }) => {
    return (
        <nav className='navbar'>
            <NavLink 
                to='/' 
                className='heading'
                onClick={() => resetSelectedMovie()}
            >
                Rancid Tomatillos
            </NavLink>
            <NavLink 
                exact to='/'  
                className='navbar-home'
                onClick={() => resetSelectedMovie()}
                activeStyle={{ opacity: '0'}}
            >
                Home
            </NavLink>
            {
                window.location.pathname === '/' &&
                <SearchByNameForm 
                    findMovieByTitle={findMovieByTitle}
                />
            }
        </nav>
    )
}

export default Navbar;
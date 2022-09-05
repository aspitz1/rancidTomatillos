import './Navbar.css';
import SearchByNameForm from '../SearchByTitleForm/SearchByTitleForm';
import { NavLink } from 'react-router-dom';

const Navbar = ({ findMovieByTitle }) => {
    return (
        <nav className='navbar'>
            <div>
                <NavLink 
                    to='/rancidtomatillos' 
                    className='heading'
                >
                    Rancid Tomatillos
                </NavLink>
                <SearchByNameForm findMovieByTitle={findMovieByTitle}/>
            </div>
            <NavLink 
                to='/rancidtomatillos'  
                className='navbar-home'
                activeStyle={{ opacity: '0'}}
            >
                Home
            </NavLink>
        </nav>
    )
}

export default Navbar;
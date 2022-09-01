import './Navbar.css'
import SearchByNameForm from '../SearchByTitleForm/SearchByTitleForm';
import { NavLink } from 'react-router-dom';

const Navbar = ({ findMovieByTitle, id }) => {
    return (
        <nav className='navbar' style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', paddingRignt: '20px'}}>
            <h1>Rancid Tomatillos</h1>
            <NavLink exact to='/'  
            className='navbar-home'
            activeStyle={{ opacity: '0', marginLeft: '20px'}}>Home</NavLink>
            <SearchByNameForm findMovieByTitle={findMovieByTitle} id={id}/>
           
        </nav>
    )
}

export default Navbar;
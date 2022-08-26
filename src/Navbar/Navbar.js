import './Navbar.css'

const Navbar = ({ view, goHome }) => {
    return (
        <nav className='navbar'>
            <h1>Rancid Tomatillos</h1>
            {view && <button className='navbar-home' onClick={goHome}>Home</button>}
        </nav>
    )
}

export default Navbar;
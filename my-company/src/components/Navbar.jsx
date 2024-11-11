import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-evenly' }}>
            <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', marginRight: '10px' }}>About</Link>
            <Link to="/services" style={{ color: 'white', marginRight: '10px' }}>Services</Link>
            <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;

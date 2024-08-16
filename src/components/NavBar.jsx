import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/pokemon'>Pokemon</Link>
            </ul>
        </nav>
    );
};

export default NavBar;
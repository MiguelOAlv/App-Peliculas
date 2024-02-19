import { Link } from 'react-router-dom';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <nav className="custom-navbar">
      <Link to="/">Inicio</Link>
      <Link to="/megusta">Me Gusta</Link>
      <Link to="/favoritos">Favoritos</Link>
    </nav>
  );
};

export default NavBar;

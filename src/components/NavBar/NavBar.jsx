import classes from './Navbar.module.css';
import logo from '../../assets/img/storemax_logo.png'
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ children }) => {

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${classes.background_color}`}>
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">
                    <img src={logo} alt="" width="200" height="50" className="d-inline-block align-text-top"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/category/computadores'} className='nav-link'>
                                Computadores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/category/celular'} className='nav-link'>
                                Celulares
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/category/tablet'} className='nav-link'>
                                Tablets
                            </NavLink>
                        </li>
                    </ul>
                    {children}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
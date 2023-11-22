import classes from './Navbar.module.css';
import logo from '../../assets/img/storemax_logo.png'
import NavBarSearch from '../NavBarSearch/NavBarSearch';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    const handleClick = (event) => {
        alert(`Has seleccionado: ${event.target.text}`)
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${classes.background_color}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="200" height="50" className="d-inline-block align-text-top"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleClick}>Computadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleClick}>Celulares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleClick}>Tablets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleClick}>Accesorios</a>
                        </li>
                    </ul>
                    <NavBarSearch />
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
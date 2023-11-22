import { useState } from "react";

const NavBarSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Estás buscando: ${searchTerm}`)
    }

    return (
        <form className="d-flex me-md-2 ms-md-2 mb-md-0 mt-md-0 mb-2">
            <input className="form-control me-2" type="search" placeholder="Ejemplo: Motorola G50" aria-label="Search" onChange={handleChange}/>
            <button className="btn btn-success" type="submit" onClick={handleSubmit} disabled={!searchTerm}>Buscar</button>
        </form>
    )
}

export default NavBarSearch;
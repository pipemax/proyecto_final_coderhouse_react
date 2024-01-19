import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"
import { useLocation } from 'react-router-dom';

const NavBarSearch = () => {

    const location = useLocation()

    const [searchTerm, setSearchTerm] = useState('')

    const { setSearch } = useContext(SearchContext)

    const handleChangeSearchBar = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleClickSearch = (event) => {
        event.preventDefault();
        setSearch(searchTerm)
    }

    const handleClickClear = (event) => {
        event.preventDefault();
        setSearchTerm('')        
        setSearch('')
    }

    return (
        <>
            {   location.pathname !== '/cart' &&
                <form className="d-flex me-md-2 ms-md-2 mb-md-0 mt-md-0 mb-2">
                    <input className="form-control me-2" type="text" placeholder="Ejemplo: Motorola G50" aria-label="Search" onChange={handleChangeSearchBar} value={searchTerm}/>
                    <button className="btn btn-success" type="submit" onClick={handleClickSearch} disabled={!searchTerm}>Buscar</button>
                    {searchTerm && <button className="btn btn-warning ms-md-2" type="submit" onClick={handleClickClear}>Limpiar</button> }
                </form>
            }
        </>
    )
}

export default NavBarSearch;
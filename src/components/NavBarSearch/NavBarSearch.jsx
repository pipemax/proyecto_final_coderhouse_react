import { useState } from "react"

const NavBarSearch = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChangeSearchBar = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmitSearchBar = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        //cuando veamos context, pasar la búsqueda del input a context para luego usarla en itemlistcontainer en un nuevo useEffect
    }

    return (
        <form className="d-flex me-md-2 ms-md-2 mb-md-0 mt-md-0 mb-2">
            <input className="form-control me-2" type="search" placeholder="Ejemplo: Motorola G50" aria-label="Search" onChange={handleChangeSearchBar}/>
            <button className="btn btn-success" type="submit" onClick={handleSubmitSearchBar} disabled={!searchTerm}>Buscar</button>
        </form>
    )
}

export default NavBarSearch;
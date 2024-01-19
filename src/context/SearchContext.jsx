import { createContext, useState } from "react";

export const SearchContext = createContext({
    searchTerm: ''
})

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const setSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <SearchContext.Provider value={{ searchTerm, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}
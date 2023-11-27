import { useState } from "react"

function SearchBar () {
    const [ searchTerm, setSearchTerm ] = useState('')
    return (
        <form>
            <input placeholder="enter your search term here" />
            <input type='submit' />
        </form>
    )
}

export default SearchBar
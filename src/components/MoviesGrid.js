import React, { useEffect, useState } from "react"
import "../styles.css"
import MovieCard from "./MovieCard"

function MoviesGrid() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    const handleSearchChange = e => {
        setSearchTerm(e.target.value)
    }

    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <div>
            <input
                type="text"
                placeholder="Search for movies ..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="movies-grid">
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MoviesGrid

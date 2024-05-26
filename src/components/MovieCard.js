import React from "react"
import "../styles.css"

function MovieCard({ movie }) {
    const handleError = e => {
        e.target.src = "images/default.jpg"
    }

    return (
        <div key={movie.id} className="movie-card" onError={handleError}>
            <img src={`images/${movie.image}`} alt={movie.title} />
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-gerne">{movie.genre}</p>
                <p className="movie-card-rating">{movie.rating}</p>
            </div>
        </div>
    )
}

export default MovieCard

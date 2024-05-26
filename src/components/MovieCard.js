import React from "react"
import "../styles.css"

function MovieCard({ movie }) {
    const getRatingClass = rating => {
        if (rating >= 8) {
            return "rating-good"
        }

        if (rating >= 5) {
            return "rating-ok"
        }

        return "rating-bad"
    }

    const handleError = e => {
        e.target.src = "images/default.jpg"
    }

    return (
        <div key={movie.id} className="movie-card" onError={handleError}>
            <img src={`images/${movie.image}`} alt={movie.title} />
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-gerne">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>
    )
}

export default MovieCard

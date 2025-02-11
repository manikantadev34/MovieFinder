
import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/MovieCard.css"
import { useMovieContext } from "../Context/MovieContext";

function MovieCards({ movie }) {
  const navigate = useNavigate();
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-cards" onClick={handleCardClick}>
      <div className="movie-posters">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlays">
          <button
            className={`favorites-btn ${favorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-Info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCards;

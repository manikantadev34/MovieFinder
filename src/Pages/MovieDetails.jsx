import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/MovieDetail.css";

//Static genre list based on your API data
const genreList = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 878, name: "Science Fiction" },
  { id: 10751, name: "Family" },
  { id: 53, name: "Thriller" },
  // Add more genres as necessary
];

const MovieDetail = () => {
  const location = useLocation();
  const { movie } = location.state || {}; // Get movie data from state

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If movie is passed through state, use it directly.
    if (movie) {
      setMovieDetails(movie);
      setLoading(false);
    } else {
      // Handle case where movie data is not passed
      setError("Movie not found");
      setLoading(false);
    }
  }, [movie]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const releaseYear = movieDetails.release_date ? movieDetails.release_date.split("-")[0] : "N/A";
  const genres = movieDetails.genre_ids
    ? movieDetails.genre_ids.map((genreId) => {
        const genre = genreList.find((g) => g.id === genreId);
        return genre ? genre.name : "Unknown";
      })
    : [];

  return (
    <div className="movie-detail">
      <div className="movie-header">
        {/* Movie Poster */}
        {movieDetails.poster_path && (
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`${movieDetails.title} Poster`}
          />
        )}
        
        <div className="movie-info">
          <h1>{movieDetails.title}</h1>
          <p className="release-year">Release Year: {releaseYear}</p>
          <p className="rating">
            Rating: {movieDetails.vote_average} / 10 ({movieDetails.vote_count} votes)
          </p>
          <p className="overview">{movieDetails.overview}</p>

          {/* Genre */}
          <div className="additional-info">
            <p><strong>Genres:</strong> {genres.join(", ")}</p>
            <p><strong>Runtime:</strong> {movieDetails.runtime ? `${movieDetails.runtime} min` : "N/A"}</p>
            <p><strong>Director:</strong> {movieDetails.director || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Backdrop Image */}
      {movieDetails.backdrop_path && (
        <div className="movie-backdrop">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
            alt={`${movieDetails.title} Backdrop`}
          />
        </div>
      )}

      {/* Trailer */}
      <div className="movie-trailer">
        {movieDetails.videos?.results?.[0]?.key ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`}
            title="Movie Trailer"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
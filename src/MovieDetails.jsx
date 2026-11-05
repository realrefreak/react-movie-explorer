import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetails() {
const { id } = useParams();

const navigate = useNavigate();
const [movie, setMovie] = useState(null);

  useEffect(() => {
  async function fetchMovie() {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );

     const data = await response.json();

    setMovie(data);
    }

    fetchMovie();
     }, [id]);

     if (!movie) {
     return <p>Loading...</p>;
    }



  return (
    <div>
       <button onClick={() => navigate(-1)}>
       ← Back
       </button>

       <div className="movie-details">
  <img
    src={movie.Poster}
    alt={movie.Title}
  />

  <div className="movie-info">
    <h1>{movie.Title}</h1>
    <p>{movie.Year}</p>
    <p>Plot: {movie.Plot}</p>
    <p>Director: {movie.Director}</p>
    <p>Cast: {movie.Actors}</p>
    <p>IMDb Rating: {movie.imdbRating}</p>
  </div>
</div>

    </div>
  );
}

export default MovieDetails;
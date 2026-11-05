import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "./MovieContext";


function MovieCard({ movie }) {
  const { favorites, setFavorites } =
    useContext(MovieContext);


    const isFavorite = favorites.some(
  (fav) => fav.imdbID === movie.imdbID
    );
    function addToFavorites() {
    if (
      favorites.some(
        (fav) => fav.imdbID === movie.imdbID
      )
    ) {
      return;
    }

    setFavorites([...favorites, movie]);
  }

    
  return (
    <div>
      
        <div className="movie-card">
          <Link to={`/movie/${movie.imdbID}`}>
        <img
        src={movie.Poster}
        alt={movie.Title}
         width="100"
         />
         
         
        
         <h2>{movie.Title}</h2>
         

        <p>{movie.Year}</p>

        </Link>
        </div>
        
        
        <button
       disabled={isFavorite}
       onClick={() => addToFavorites(movie)}
      >
      {isFavorite
      ? "Added ✓"
      : "Add to Favorites"}
        </button>
        </div>
        
    
  );
}
export default MovieCard;
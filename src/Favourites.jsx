
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "./MovieContext";

function Favourites() {
  const { favorites, setFavorites } =
    useContext(MovieContext);

function removeFromFavorites(movieToRemove) {
  const newFavorites = favorites.filter(
    (movie) =>
      movie.imdbID !== movieToRemove.imdbID
  );

  setFavorites(newFavorites);
}
  return (
 <div>
      <h1>Favourites Page</h1>

      {favorites.length === 0 && (
      <p>No favorites yet</p>
      )}
    
    <div className="movies-grid">
     {favorites.map((movie) => (
  <div key={movie.imdbID}
  className="movie-card">

<Link to={`/movie/${movie.imdbID}`}>
    <img
        src={movie.Poster}
        alt={movie.Title}
         width="200"
         />

    <h2>{movie.Title}</h2>
    <p>{movie.Year}</p>
    
    </Link>
     
    <button
      onClick={() => removeFromFavorites(movie)}
    >
      Remove
    </button>
  </div>
  
))}
      
  </div>        
  
      
    </div>
    
  );
 
} 

export default Favourites;
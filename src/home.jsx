import MovieCard from "./MovieCard";
import { useState , useEffect} from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;



function Home() {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [loading, setLoading] = useState(false);


  async function searchMovies() {
    setLoading(true);
    const response = await fetch(
  `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`
);
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(false);
  }

async function fetchBatmanMovies() {
  setLoading(true);
  const response = await fetch(
    `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`
  );

  const data = await response.json();

  setMovies(data.Search || []);
  setLoading(false);
}

useEffect(() => {
  fetchBatmanMovies();
}, []);

 const filteredMovies = movies.filter(
  (movie) =>
    movie.Title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
   );

  function handleKeyDown(e) {
  if (e.key === "Enter") {
    searchMovies();
  }
}

  return (
  
    <div>
       <h1>Home Page</h1>
       <input
         value={searchTerm}
         onChange={(e) =>
         setSearchTerm(e.target.value)
         }
         onKeyDown={handleKeyDown}
        placeholder="Search movies..."
       />
        <button onClick={searchMovies}>
         Search
        </button>

       {loading && <p>Loading...</p>}
        
        <div className="movies-grid">
      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />

      ))}
    </div>
    </div>
  );
}

export default Home;
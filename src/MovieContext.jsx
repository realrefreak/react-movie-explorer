import {
  createContext,
  useState,
  useEffect
} from "react";



const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  return (
    <MovieContext.Provider
      value={{
        favorites,
        setFavorites
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
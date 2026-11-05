import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./home";
import Favourites from "./Favourites";
import MovieDetails from "./MovieDetails";
import "./App.css";





function App() {
  

return (
    <BrowserRouter>
     <Link to="/">Home</Link>
     
     <Link to="/favourites">Favourites</Link>


  <Routes>
    <Route
      path="/"
      element={<Home/>}
    />

    <Route path="/favourites" element={<Favourites/>} />
    <Route
     path="/movie/:id"
     element={<MovieDetails />}
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;

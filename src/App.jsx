import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/postPages/Home";
import Nav from "./components/Nav";
import Details from "./pages/postPages/Details";
import AllMovies from "./pages/moviePages/AllMovies";
import MovieDetails from "./pages/moviePages/MovieDetails";
import Example from "./components/Example";
import { CartProvider } from "./store/cartStore";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/movies" element={<AllMovies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/postPages/Home";
import Nav from "./components/Nav";
import Details from "./pages/postPages/Details";
import AllMovies from "./pages/moviePages/AllMovies";
import MovieDetails from "./pages/moviePages/MovieDetails";
import Example from "./components/Example";
import Crud from "./pages/prac/Crud";
import { CartProvider } from "./store/cartStore";

import Tictac from "./pages/tictac/Tictac";
import CrudTwo from "./pages/crudtwo/CrudTwo";

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
            {/* <Route path="/test" element={<Cart />} /> */}
            <Route path="/crud" element={<Crud />} />
            <Route path="/tic" element={<Tictac />} />
            <Route path="/two" element={<CrudTwo />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/postPages/Home';
import Nav from './components/Nav';
import Details from './pages/postPages/Details';
import AllMovies from './pages/moviePages/AllMovies';
import MovieDetails from './pages/moviePages/MovieDetails';

function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:id' element={<Details />}/>
          <Route path='/movies' element={<AllMovies />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

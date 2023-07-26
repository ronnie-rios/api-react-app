import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Details from './pages/Details';
import AllMovies from './pages/AllMovies';
import MovieDetails from './pages/MovieDetails';

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

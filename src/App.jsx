import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Details from './pages/Details';
import AllMovies from './pages/AllMovies';

function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:id' element={<Details />}/>
          <Route path='/rockets' element={<AllMovies />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

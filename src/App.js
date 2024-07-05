import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Composants/NavBar'; 
import Search from './Pages/Search';
import Profile from './Pages/Profil';
import Dicover from './Pages/Discover';

function App() {
  return (
    <Router>
          <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/profil' element={<Profile />} />
        <Route path='/discover' element={<Dicover />} />
      </Routes>
    </Router>
  );
}
export default App
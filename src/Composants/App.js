import '../Styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import NavBar from './NavBar'; // Assurez-vous d'importer NavBar
import Search from '../Pages/Search';
import Profile from '../Pages/Profil';

function App() {
  return (
    <Router>
          <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/profil' element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App
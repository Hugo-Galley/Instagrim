import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Composants/NavBar'; 
import Profile from './Pages/Profil';
import Dicover from './Pages/Discover';
import Reel from './Pages/Reels';

function App() {
  return (
    <Router>
          <NavBar />
      <Routes>
        <Route path='/Instagrim/' element={<Home />} />
        <Route path='/Instagrim/profil' element={<Profile />} />
        <Route path='/Instagrim/discover' element={<Dicover />} />
        <Route path='/Instagrim/reels' element={<Reel/>} />
      </Routes>
    </Router>
  );
}
export default App
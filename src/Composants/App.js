import '../Styles/App.css';
import './NavBar'
import React from 'react';
import NavBar from './NavBar';
import BarStory from './BarreStory'

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='NavBar'>
          <NavBar />
        </div>
        <div className='MainLayout'>
          <div className='Espacement'>

          </div>
          <div className='BarStory'>
              <BarStory />
          </div>
          <div className='InfoCompte'>

          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}

export default App;

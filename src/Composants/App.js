import '../Styles/App.css';
import './NavBar'
import React from 'react';
import NavBar from './NavBar';
import BarStory from './BarreStory'
import CardPost from './CardPost';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='NavBar'>
          <NavBar />
        </div>
        <div className='MainLayout'>
          <div className='Espacement'/>
          <div className='CentreLayout'>
            <div className='BarStory'>
                <BarStory />
            </div>
            <div className='Feed'>
              <CardPost key={1} content={"video.mp4"} />
            </div>
          </div>
          <div className='InfoCompte'>

          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}

export default App;

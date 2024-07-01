import '../Styles/App.css';
import './NavBar'
import React from 'react';
import NavBar from './NavBar';
import BarStory from './BarreStory'
import CardPost from './CardPost';
import FicheContact from './FicheContact';
import test from '../items/99678890.jpeg'

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
              <CardPost key={1} content={"video.mp4"} />
              <CardPost key={1} content={"video.mp4"} />
            </div>
          </div>
          <div className='InfoCompte'>
            <FicheContact key={1} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={test} />
            <p className='SugForYou'>Suggestions pour vous</p>
            <FicheContact key={1} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={test} />
            <FicheContact key={1} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={test} />
            <FicheContact key={1} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={test} />
            <FicheContact key={1} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={test} />
            <p className='LegalCredits'>À propos Aide Presse API Emplois
            <br/>Confidentialité Conditions Lieux Langue <br/>Meta Verified</p>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import NavBar from '../Composants/NavBar';
import BarStory from '../Composants/BarreStory'
import CardPost from '../Composants/CardPost';
import FicheContact from '../Composants/FicheContact';
import test from '../items/99678890.jpeg'

function Home() {
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

export default Home;

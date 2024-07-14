import React from 'react';
import BarStory from '../Composants/BarreStory'
import CardPost from '../Composants/CardPost';
import FicheContact from '../Composants/FicheContact';
import test from '../items/99678890.jpeg'

function Home() {
  let videoPathArray = [test,test,test];
  let contactArray = [test,test,test,test];
  return (
      <div className='container'>

        <div className='MainLayout'>
          <div className='Espacement'/>
          <div className='CentreLayout'>
            <div className='BarStory'>
                <BarStory />
            </div>
            <div className='Feed'>
            { videoPathArray.map((index)=> ( <CardPost key={index} content={test} /> )) }
            </div>
          </div>
          </div>
          <div className='InfoCompte'>
            <FicheContact key={12} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={test} />
            <p className='SugForYou'>Suggestions pour vous</p>
            {contactArray.map((path, index)=> (<FicheContact key={index} username={"hugigogo_"} pseudo={"SuperBg"} profilePicture={path} />))}
            <p className='LegalCredits'>À propos Aide Presse API Emplois
            <br/>Confidentialité Conditions Lieux Langue <br/>Meta Verified</p>
          </div>
      </div>
  );
}

export default Home;

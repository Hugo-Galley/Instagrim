import React, { useRef } from 'react';
import '../Styles/BarreStory.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pp1 from '../items/99678890.jpeg';
import pp2 from '../items/instaLogo.svg';
import pp3 from '../items/instaLogoWhite.svg';
import Story from './Storys';

function BarStory() {
    const carouselRef = useRef(null);

    let listePP = [pp1, pp2, pp3];
    let listeUsername = ['Hugo', 'Tata', 'Chef', "user2", "user5", "user6", "user7","userr1","ERTYUJ"];

    return (
        <div className="BarStory">
            <div className="carousel-container">
                <div className="carousel" ref={carouselRef}>
                    {listeUsername.map((username, i) => (
                        <Story key={i} username={username} profilPhoto={listePP[i]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BarStory;

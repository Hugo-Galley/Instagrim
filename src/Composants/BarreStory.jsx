import React, { useRef } from 'react';
import pp1 from '../items/99678890.jpeg';
import Story from './Storys';
import '../Styles/Home.css'

export default function BarStory() {
    const scrollRef = useRef(null);
  
    const scroll = (direction) => {
      const container = scrollRef.current;
      const scrollAmount = direction === 'left' ? -120 : 120;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
      const listeUsername = ['Hugo', 'Tata', 'Chef', "user2", "user5", "user6", "user7", "userr1", "ERTYUJ"];
  
    return (
      <div className="bar-story">
        <button onClick={() => scroll('left')} className="scroll-button left">
          &lt;
        </button>
        <div ref={scrollRef} className="story-container">
          {listeUsername.map((username, i) => (
            <Story key={i} username={username} profilPhoto={pp1} />
          ))}
        </div>
        <button onClick={() => scroll('right')} className="scroll-button right">
          &gt;
        </button>
      </div>
    );
  }
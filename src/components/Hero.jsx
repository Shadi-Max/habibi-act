import './styles.css'
import React from 'react';

function Hero() {
    return (
        <div className='hero'>
             <div className='hero-col'>
                <h1 className='hero-headline'>
                    HABIBI ACT!
                <br />
                    Brings You
                <br />
                    Music, Dance & Culture In
                <br />
                    Düsseldorf & NRW region
                </h1>
                <button className="button" href="/menu">
                    <span>More </span>
                </button>
            </div>
        </div>
    );
}

export default Hero;
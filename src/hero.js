import React from 'react';
import './index.css';

function hero(){
    return (
        <section className='hero'>
            <img src={process.env.PUBLIC_URL+'./grid.png'} className='hero_grid' alt='grid'/>
            <h1 className='hero_header'>Online Experieces</h1>
            <p className='hero_paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default hero;

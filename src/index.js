import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Nav from './Nav';
import Hero from './hero';
import Card from './Card';
import data from './data';

const Cards = data.map(item => {
  return (
    <Card
        key={item.id}
        {...item}  
    />
  )
}) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <section className='cards-list'>
      {Cards}
    </section>
  </React.StrictMode>
);

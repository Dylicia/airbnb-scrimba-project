import React from 'react';
import './index.css';

function Card(props){
    let badgeText 
    if (props.stock===0){
        badgeText='Sold Out'
    } else if (props.location==='Online'){
        badgeText='Online'
    } 

    return (
        <div className='card'>
            {/* && logical operation */}
            {props.stock==0 && <div className='card_badge'> {badgeText} </div>}
            <img src={process.env.PUBLIC_URL+props.img} className='card_img' alt='first_grid'/>
            <div className='card_state'>
                <img src={process.env.PUBLIC_URL+'./star.png'} className='card_star' alt='star'/>
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) * </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>from ${props.price}/per person</span></p>
        </div>
    );
}
export default Card;
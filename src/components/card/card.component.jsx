import React from 'react';
import './style.css';

export const Card=(props)=>{
    return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}set=set2&size=100*50`} alt="monster" />
        <h2 key={props.monster.id}>{props.monster.name}</h2>
         <p>{props.monster.email}</p>
    </div>
    );
}
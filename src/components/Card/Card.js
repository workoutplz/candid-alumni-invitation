import React from 'react';
import './Card.css';

function Card({ title, children }) {
  const shapes = ['triangle', 'square', 'circle'];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  return (
    <div className="card-container">
      <div className={`shape ${randomShape}`}></div>
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;

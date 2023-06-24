import React from 'react';
import '../../styles/card.scss';

const Card = ({ icon, boldText, smallText, bgColor }) => {
    return (
      <div className="card" style={{ backgroundColor: bgColor }}>
        <div className="icon-container">
          
          {icon}
        </div>
        <div className="text-container">
          <span className="small-text">{smallText}</span>
          <br />
          <span className="bold-text">{boldText}</span>
        </div>
      </div>
    );
  };

export default Card;
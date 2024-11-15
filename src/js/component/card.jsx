import React from 'react';

const Card = ({ title, text, buttonText }) => {
  return (
    <div className="card text-center">
      <img src="https://placeimg.com/500/325/any" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;


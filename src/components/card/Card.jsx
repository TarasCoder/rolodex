import React from "react";
import "./Card.css"

function Card({item}) {
  return (
      <div className="card-container">
        <img src="#" alt="avatar" />
        <h2>{item.name}</h2>
        <h2>email</h2>
      </div>
  );
}

export default Card;

import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.item.picture.large} alt="avatar" />
      <h2>{props.item.name.first + " " + props.item.name.last}</h2>
      <h6 className="emailS">{props.item.email}</h6>
    </div>
  );
}

export default Card;

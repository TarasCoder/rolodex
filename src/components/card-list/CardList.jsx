import React from "react";
import "./CardList.css";

function CardList({ filtered }) {
  return (
    <div className="card-list">
      {filtered.map((item) => {
        return (
          <div key={item.id}>
            <div className="card-container">
              <img src="#" alt="avatar" />
              <h2>{item.name}</h2>
              <h2>email</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardList;

import React from "react";
import "./CardList.css";
import Card from "../card/Card";

function CardList({ filtered }) {
  return (
    <div className="card-list">
      {filtered.map((item) => {
        return (
          <Card key={item.id} item={item} />
        );
      })}
    </div>
  );
}

export default CardList;

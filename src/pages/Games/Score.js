import React from "react";
import "./Games.css";
const Score = ({ score }) => {
  return (
    <div className="score">
      <h3>Total Points: {score}</h3>
    </div>
  );
};

export default Score;

import React from "react";
import "./Games.css";
const Question = ({ question, selectedAnswer, onAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => onAnswerClick(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

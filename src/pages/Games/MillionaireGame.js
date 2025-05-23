// src/pages/Games/MillionaireGame.js
import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import "./MillionaireGame.css";
import { FaPhone, FaUsers } from "react-icons/fa";
import { GiSplitCross } from "react-icons/gi";
import MillionaireImg from "./images/millionaire.jpg";

export default function MillionaireGame() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const [callUsed, setCallUsed] = useState(false);
  const [audienceUsed, setAudienceUsed] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [showCall, setShowCall] = useState(false);
  const [showAudience, setShowAudience] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      setLoading(true);
      api
        .get("/api/millionaire/questions/")
        .then(({ data }) => {
          console.log("✅ Full Question Data:", data);
          setQuestions(data);
        })
        .catch((err) => {
          console.error("❌ Error loading questions:", err);
          setError("Failed to load questions.");
        })
        .finally(() => setLoading(false));
    }
  }, [gameStarted]);

  const handleStart = () => {
    setGameStarted(true);
    setScore(0);
    setCurrentIndex(0);
    setGameOver(false);
    setSelected(null);
    setShowNext(false);
    setFeedback(null);
    setFiftyUsed(false);
    setCallUsed(false);
    setAudienceUsed(false);
    setEliminatedOptions([]);
    setShowCall(false);
    setShowAudience(false);
  };

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (optionKey) => {
    setSelected(optionKey);
    const correctKey = Object.keys(currentQuestion.options)[currentQuestion.correct_option - 1];

    if (optionKey === correctKey) {
      setScore(score + 100);
      setFeedback("✅ Correct!");
      setShowNext(true);
    } else {
      const correctText = Object.keys(currentQuestion.options)[currentQuestion.correct_option - 1];
      setFeedback(`❌ Wrong! Correct answer: ${correctText}`);
      setTimeout(() => setGameOver(true), 2000);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setFeedback(null);
      setShowNext(false);
      setEliminatedOptions([]);
      setShowCall(false);
      setShowAudience(false);
    } else {
      alert("🎉 You completed the game!");
      setGameOver(true);
    }
  };

  const handleBack = () => {
    setGameStarted(false);
    setGameOver(false);
    setSelected(null);
    setFeedback(null);
    setShowNext(false);
  };

  const useFiftyFifty = () => {
    if (fiftyUsed || !currentQuestion) return;
    const correctIdx = currentQuestion.correct_option - 1;
    const keys = Object.keys(currentQuestion.options);
    const incorrectKeys = keys.filter((_, i) => i !== correctIdx);
    const removed = incorrectKeys.sort(() => 0.5 - Math.random()).slice(0, 2);
    setEliminatedOptions(removed);
    setFiftyUsed(true);
  };

  const useAudience = () => {
    if (audienceUsed || !currentQuestion) return;
    setAudienceUsed(true);
    setShowAudience(true);
  };

  const useCall = () => {
    if (callUsed || !currentQuestion) return;
    setCallUsed(true);
    setShowCall(true);
  };

  return (
    <div className="millionaire-game-container">
      {!gameStarted ? (
        <div className="start-screen">
          <h2 style={{color:"lime"}}>Who wants to become a millionaire?</h2>
          <img src={MillionaireImg} alt="Millionaire Game" />
          <p>Play and get to know the world in a new way</p>
          <button onClick={handleStart} className="start-btn">Start Game</button>
        </div>
      ) : loading ? (
        <h2>Loading questions...</h2>
      ) : error ? (
        <h2 className="error-text">{error}</h2>
      ) : gameOver ? (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Your Score: {score}</p>
          <button onClick={handleBack} className="back-btn">Back</button>
        </div>
      ) : currentQuestion ? (
        <div className="question-box">
          <h3 className="question">{currentQuestion.text}</h3>
          <div className="options">
            {Object.entries(currentQuestion.options).map(([key, value], idx) => (
              !eliminatedOptions.includes(key) && (
                <button
                  key={key}
                  className={`option-btn ${selected === key ? "selected" : ""}`}
                  onClick={() => handleAnswer(key)}
                  disabled={!!selected}
                  style={{ color: 'white' }}
                >
                  {key}
                </button>
              )
            ))}
          </div>

          {feedback && <p className="feedback-text">{feedback}</p>}
          {showCall && <p className="feedback-text">📞 Friend thinks: {currentQuestion.call_answer}</p>}
          {showAudience && (
            <div className="audience-results">
              {Object.entries(currentQuestion.options).map(([key, value], i) => (
                <p key={i}>🗳 {key}: {value}%</p>
              ))}
            </div>
          )}

          <div className="game-info">
            <p>Level {currentIndex + 1}</p>
            <p>Total Points: {score}</p>
          </div>

          <div className="lifelines">
            {!fiftyUsed && (
              <div className="lifeline-circle" onClick={useFiftyFifty}><GiSplitCross /><span>50:50</span></div>
            )}
            {!callUsed && (
              <div className="lifeline-circle" onClick={useCall}><FaPhone /><span>Call</span></div>
            )}
            {!audienceUsed && (
              <div className="lifeline-circle" onClick={useAudience}><FaUsers /><span>Audience</span></div>
            )}
          </div>

          {showNext && <button className="next-btn" onClick={handleNext}>Next</button>}
        </div>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
}

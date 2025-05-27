// src/pages/Games/MillionaireGame.js
import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import "./MillionaireGame.css";
import { FaPhone, FaUsers } from "react-icons/fa";
import { GiSplitCross } from "react-icons/gi";
import MillionaireImg from "./images/millionaire.jpg";
import { useNavigate } from "react-router-dom";

export default function MillionaireGame() {
  const navigate = useNavigate();
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
  const [highestScore, setHighestScore] = useState(null);
  const [unauthMessage, setUnauthMessage] = useState("");

  const isAuthenticated = !!localStorage.getItem("accessToken");

  useEffect(() => {
    if (gameStarted) {
      setLoading(true);
      api
        .get("/api/millionaire/questions/")
        .then(({ data }) => {
          setQuestions(data);
        })
        .catch((err) => {
          setError("Failed to load questions.");
        })
        .finally(() => setLoading(false));
    }
  }, [gameStarted]);

  useEffect(() => {
    if (isAuthenticated) {
      const storedScore = localStorage.getItem("highestScore");
      if (storedScore) {
        setHighestScore(Number(storedScore));
      }
    }
  }, []);

  const handleStart = () => {
    if (!isAuthenticated) {
      setUnauthMessage("⚠️ You should sign up or log in to play.");
      return;
    }

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
    setUnauthMessage("");
  };

  const currentQuestion = questions[currentIndex];
  const correctKey = currentQuestion && Object.keys(currentQuestion.options)[currentQuestion.correct_option - 1];

  const handleAnswer = (optionKey) => {
    setSelected(optionKey);

    if (optionKey === correctKey) {
      const newScore = score + 1;
      setScore(newScore);
      setFeedback("✅ Correct!");
      setShowNext(true);

      if (newScore > highestScore) {
        setHighestScore(newScore);
        localStorage.setItem("highestScore", newScore.toString());
      }
    } else {
      setFeedback(`❌ Wrong! Correct answer: ${correctKey}`);
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
          <h2 style={{ color: "lime" }}>Who wants to become a millionaire?</h2>
          <img src={MillionaireImg} alt="Millionaire Game" />
          <p>Play and get to know the world in a new way</p>
          <button onClick={handleStart} className="start-btn">Start Game</button>
          {unauthMessage && <p className="error-text">{unauthMessage}</p>}
          {isAuthenticated && highestScore !== null && (
            <p style={{ color: "#00ff26" }}>My highest score is: {highestScore}</p>
          )}
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
            {Object.entries(currentQuestion.options).map(([key]) => (
              !eliminatedOptions.includes(key) && (
                <button
                  key={key}
                  className={`option-btn 
                    ${selected && key === correctKey ? "correct" : ""} 
                    ${selected === key && key !== correctKey ? "wrong" : ""}`}
                  onClick={() => handleAnswer(key)}
                  disabled={!!selected}
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
            {!fiftyUsed && <div className="lifeline-circle" onClick={useFiftyFifty}><GiSplitCross /><span>50:50</span></div>}
            {!callUsed && <div className="lifeline-circle" onClick={useCall}><FaPhone /><span>Call</span></div>}
            {!audienceUsed && <div className="lifeline-circle" onClick={useAudience}><FaUsers /><span>Audience</span></div>}
          </div>

          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            {showNext && <button className="next-btn" onClick={handleNext}>Next</button>}
            <button onClick={handleBack} className="back-btn">Leave Game</button>
          </div>
        </div>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
}

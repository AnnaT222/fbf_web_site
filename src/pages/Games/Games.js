import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Lifelines from "./Lifelines";
import Score from "./Score";

const Games = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0); // 0 = game not started
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds per question
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );
  const [gameOver, setGameOver] = useState(false);

  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
    phoneAFriend: true,
    askAudience: true,
  });

  // Fetch questions from API when component mounts
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/questions")
      .then((response) => setQuestions(response.data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  // Timer countdown
  useEffect(() => {
    if (level > 0 && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleGameOver();
    }
  }, [timeLeft, level]);

  const startGame = () => {
    setLevel(1);
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(15);
    setGameOver(false);
    setLifelines({
      fiftyFifty: true,
      phoneAFriend: true,
      askAudience: true,
    });
  };

  const returnToHome = () => {
    setGameOver(false);
    setLevel(0); // Back to initial start screen
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 100); // Increase score
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setLevel(level + 1);
          setTimeLeft(15); // Reset timer for next question
          setSelectedAnswer(null);
        } else {
          alert("Congratulations! You won the game!");
          handleGameOver();
        }
      }, 1000);
    } else {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
    if (score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
    setLevel(0); // Return to start screen
  };

  return (
    <div className="game-container">
      {gameOver ? (
        <div className="game-over-screen">
          <h1>GAME OVER</h1>
          <button className="game-over-button" onClick={startGame}>Restart Game</button>
          <button className="home-button" onClick={returnToHome}>Return to Home</button>
        </div>
      ) : level === 0 ? (
        <div className="start-screen">
          <h1>Who Wants to Be a Millionaire?</h1>
          <h3>High Score: {highScore}</h3>
          <button className="start-button" onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <>
          <h2>Level {level}</h2>
          <h3>Time Left: {timeLeft} seconds</h3>
          {questions.length > 0 && (
            <Question
              question={questions[currentQuestionIndex]}
              selectedAnswer={selectedAnswer}
              onAnswerClick={handleAnswerClick}
            />
          )}
          <Lifelines lifelines={lifelines} setLifelines={setLifelines} />
          <Score score={score} />
        </>
      )}
    </div>
  );
};

export default Games;

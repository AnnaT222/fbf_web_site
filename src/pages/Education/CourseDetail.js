import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseDetail = ({ course, onClose, onComplete }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://your-api.com/courses/${course.id}/questions`; // Replace with actual API

  useEffect(() => {
    // Fetch course-related questions
    axios.get(API_URL)
      .then(response => {
        if (Array.isArray(response.data)) {
          setQuestions(response.data);
        } else {
          throw new Error("Invalid API response format.");
        }
      })
      .catch(error => {
        console.error("Error fetching quiz questions:", error);
        setError("Failed to load quiz questions.");
      })
      .finally(() => setLoading(false));
  }, [course.id]);

  // Handle answer selection
  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  // Check answers
  const checkAnswers = () => {
    const allCorrect = questions.every(q => answers[q.id] === q.correctAnswer);
    setResult(allCorrect ? "pass" : "fail");
  };

  return (
    <div className="course-detail-container">
      <button className="close-button" onClick={onClose}>✖ Close</button>
      <h1>{course.title}</h1>

      {showQuiz ? (
        <div className="quiz-container">
          <h2>Final Quiz</h2>
          {loading ? (
            <p>Loading questions...</p>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <>
              {questions.map((q, index) => (
                <div key={q.id} className="quiz-question">
                  <p><strong>{index + 1}. {q.text}</strong></p>
                  {q.options.map((option, i) => (
                    <button
                      key={i}
                      className={`quiz-option ${
                        answers[q.id] === option ? "selected" : ""
                      }`}
                      onClick={() => handleAnswerSelect(q.id, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ))}
              <button className="submit-quiz" onClick={checkAnswers}>Submit Answers</button>
            </>
          )}

          {result === "pass" && (
            <div className="quiz-result success">
              <p>✅ Congratulations! You passed the quiz!</p>
              <button className="next-course" onClick={onComplete}>Proceed to Next Course</button>
            </div>
          )}

          {result === "fail" && (
            <div className="quiz-result fail">
              <p>❌ You failed the quiz. Try again or review the course.</p>
              <button className="retry-quiz" onClick={() => setResult(null)}>Retry Quiz</button>
              <button className="review-course" onClick={() => setShowQuiz(false)}>Review Course</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>

          {course.image && <img src={course.image} alt={course.title} className="course-image" />}
          <p className="course-text">{course.description}</p>

          <button className="next-button" onClick={() => setShowQuiz(true)}>Take Quiz</button>
        </>
      )}
    </div>
  );
};

export default CourseDetail;

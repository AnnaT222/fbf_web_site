import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import "./LessonModules.css";

export default function LessonModules({ lessonId, onBack }) {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/api/lessons/${lessonId}/modules/`)
      .then(({ data }) => setModules(data))
      .catch(() => setError("Failed to load lesson modules."))
      .finally(() => setLoading(false));
  }, [lessonId]);

  const startModule = (module) => {
    setCurrentModule(module);
    setCurrentSlideIndex(0);
    setShowQuiz(false);
    setQuizCompleted(false);
  };

  const currentSlide = currentModule?.slides?.[currentSlideIndex] || null;
  const currentQuiz = currentSlide?.quizzes?.[0]; // assuming 1 quiz per slide

  const handleNext = () => {
    if (showQuiz) {
      setSelectedOption("");
      setQuizSubmitted(false);
      if (currentSlideIndex + 1 < currentModule.slides.length) {
        setCurrentSlideIndex((i) => i + 1);
        setShowQuiz(false);
      } else {
        setQuizCompleted(true);
        setCurrentModule(null);
      }
    } else {
      setShowQuiz(true);
    }
  };

  const submitQuiz = () => {
    if (!currentQuiz) return;
    setQuizSubmitted(true);
  };

  const isCorrect =
    quizSubmitted && selectedOption === currentQuiz?.correct_option;

  if (loading) return <h2>Loading modules...</h2>;
  if (error) return <h2 className="error-text">{error}</h2>;

  return (
    <div className="lesson-modules-container">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      {!currentModule && !quizCompleted && <h1>Modules</h1>}

      {quizCompleted && <h2>🎉 Quiz Completed!</h2>}

      {!currentModule &&
        !quizCompleted &&
        modules.map((module) => (
          <div key={module.id} className="module-card">
            <img
              src={`http://127.0.0.1:8000${module.module_image}`}
              alt={module.module_title}
              className="module-image"
            />
            <h2>{module.module_title}</h2>
            <p>{module.module_description}</p>
            <button
              className="start-module-button"
              onClick={() => startModule(module)}
            >
              Start Module
            </button>
          </div>
        ))}

      {currentModule && currentSlide && (
        <div className={`slide-container ${showQuiz ? "show-slide" : ""}`}>
          {!showQuiz ? (
            <>
              <img
                src={`http://127.0.0.1:8000${currentSlide.slide_image}`}
                alt={currentSlide.slide_title}
                className="slide-image"
              />
              <h2 style={{ color: "#000" }}>{currentSlide.slide_title}</h2>
              <p style={{ color: "#000", fontSize: "18px" }}>
                {currentSlide.slide_text}
              </p>
              <button className="next-slide" onClick={handleNext}>
                Take Quiz
              </button>
            </>
          ) : (
            <div className="quiz-section">
              <h3>{currentQuiz.question}</h3>
              {[
                currentQuiz.option1,
                currentQuiz.option2,
                currentQuiz.option3,
              ].map((opt, idx) => (
                <button
                  key={idx}
                  className={`quiz-option ${
                    selectedOption === opt ? "selected" : ""
                  }`}
                  onClick={() => setSelectedOption(opt)}
                  disabled={quizSubmitted}
                >
                  {opt}
                </button>
              ))}
              {!quizSubmitted ? (
                <button
                  className="submit-quiz"
                  onClick={submitQuiz}
                  disabled={!selectedOption}
                >
                  Submit
                </button>
              ) : (
                <>
                  <p className={isCorrect ? "correct" : "wrong"}>
                    {isCorrect
                      ? "✅ Correct!"
                      : "❌ Wrong. Correct: " + currentQuiz.correct_option}
                  </p>
                  <button className="next-slide" onClick={handleNext}>
                    Next Slide
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

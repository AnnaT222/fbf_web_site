import React, { useState } from "react";
import "./LessonModuleQuiz.css";

export default function LessonModuleQuiz({ module, onBack }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const currentSlide = module?.slides?.[currentSlideIndex];
  const currentQuiz = currentSlide?.quizzes?.[0];

  const handleNext = () => {
    setSelectedOption(null);
    setQuizSubmitted(false);
    if (currentSlideIndex + 1 < module.slides.length) {
      setCurrentSlideIndex((i) => i + 1);
    } else {
      alert("🎉 Quiz Completed!");
      onBack();
    }
  };

  const submitQuiz = () => {
    if (!currentQuiz) return;
    setQuizSubmitted(true);
  };

  const isCorrect =
    quizSubmitted &&
    selectedOption === currentQuiz?.[`option${currentQuiz.correct_option}`];

  return (
    <div className="lesson-quiz-container">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <div className="quiz-header">
        <h2>{module?.module_title}</h2>
        <p>{currentSlide?.slide_title}</p>
      </div>

      <div className="quiz-slide">
        {currentSlide?.slide_image && (
          <img
            src={`http://127.0.0.1:8000${currentSlide.slide_image}`}
            alt={currentSlide.slide_title}
            className="slide-image"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
        )}
        <p className="slide-text">{currentSlide?.slide_text}</p>

        <div className="quiz-options">
          {["option1", "option2", "option3"].map((key, idx) => {
            const value = currentQuiz?.[key];
            const isSelected = selectedOption === value;
            const correct = currentQuiz?.[`option${currentQuiz.correct_option}`];

            return (
              <button
                key={idx}
                className={`quiz-option-btn ${
                  quizSubmitted
                    ? value === correct
                      ? "correct"
                      : isSelected
                      ? "wrong"
                      : ""
                    : isSelected
                    ? "selected"
                    : ""
                }`}
                onClick={() => !quizSubmitted && setSelectedOption(value)}
              >
                {value}
              </button>
            );
          })}
        </div>

        {!quizSubmitted ? (
          <button
            className="submit-quiz-btn"
            disabled={!selectedOption}
            onClick={submitQuiz}
          >
            Submit
          </button>
        ) : (
          <>
            <div className="quiz-feedback">
              {isCorrect
                ? "✅ Correct!"
                : `❌ Wrong. Correct: ${
                    currentQuiz?.[`option${currentQuiz.correct_option}`]
                  }`}
            </div>
            <button className="next-slide-btn" onClick={handleNext}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

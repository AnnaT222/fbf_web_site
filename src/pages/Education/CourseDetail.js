import React, { useEffect, useState } from "react";
import api from "../../api/axios";

export default function CourseDetail({ course, onClose, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [answers,   setAnswers]   = useState({});
  const [result,    setResult]    = useState(null);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);

  /* fetch quiz questions for this lesson */
  useEffect(() => {
    setLoading(true);
    api.get(`/api/lessons/${course.id}/questions/`)   // adjust to your real url
       .then(({ data }) => setQuestions(Array.isArray(data) ? data : []))
       .catch(() => setError("Cannot load quiz questions"))
       .finally(() => setLoading(false));
  }, [course.id]);

  /* helpers */
  const choose = (qId, opt) => setAnswers((prev) => ({ ...prev, [qId]: opt }));
  const submit = () => {
    const ok = questions.every((q) => answers[q.id] === q.correct_answer);
    setResult(ok ? "pass" : "fail");
    if (ok) onComplete();          // unlock next course
  };

  return (
    <div className="course-detail-container">
      <button onClick={onClose} className="close-button">✖</button>
      <h1>{course.lesson_title}</h1>

      {loading && <p>Loading…</p>}
      {error   && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <>
          <img src={course.lesson_image} alt={course.lesson_title} />
          <p>{course.lesson_description}</p>

          <h2>Quiz</h2>
          {questions.map((q, idx) => (
            <div key={q.id}>
              <p><strong>{idx + 1}. {q.text}</strong></p>
              {q.options.map((opt) => (
                <button
                  key={opt}
                  className={answers[q.id] === opt ? "selected" : ""}
                  onClick={() => choose(q.id, opt)}
                >{opt}</button>
              ))}
            </div>
          ))}

          <button onClick={submit}>Submit answers</button>

          {result === "pass" && <p>✅ You passed!</p>}
          {result === "fail" && <p>❌ Try again</p>}
        </>
      )}
    </div>
  );
}

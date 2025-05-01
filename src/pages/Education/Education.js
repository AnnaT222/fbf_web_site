import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import LessonModules from "./LessonModules";
import "./Education.css";

export default function Education() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/lessons/")
      .then(({ data }) => setCourses(Array.isArray(data) ? data : []))
      .catch(() => setError("Cannot load lessons - check your token / server"))
      .finally(() => setLoading(false));
  }, []);

  /* helpers */
  const open = (course) => setSelected(course);
  const close = () => setSelected(null);
  const done = (id) => {
    setCompleted([...completed, id]);
    close();
  };

  return (
    <div className="education-container">
      {selected ? (
        <LessonModules lessonId={selected.id} onBack={close} />
      ) : (
        <>
          <h1>Education Courses</h1>
          {loading && <h2>Loading…</h2>}
          {error && <h2 className="error-text">{error}</h2>}
          {!loading && !error && (
            <div className="courses-grid">
              {courses.map((c) => (
                <div key={c.id} className={`course-card`}>
                  <div className="course-card-content">
                    <img
                      src={`http://127.0.0.1:8000/${c.lesson_image}`}
                      alt={c.lesson_title}
                      className="lesson-image"
                    />
                    <div className="course-info">
                      <h2>{c.lesson_title}</h2>
                      <button onClick={() => open(c)}>Take</button>
                    </div>
                  </div>
                  <div className="course-description">
                    <p>{c.lesson_description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

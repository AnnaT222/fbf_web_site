import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import CourseDetail from "./CourseDetail";
import "./Education.css";

export default function Education() {
  const [courses, setCourses]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get("/api/lessons/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      }
    })
    .then(({ data }) => setCourses(Array.isArray(data) ? data : []))
    .catch(() => setError("Cannot load lessons - check your token / server"))
    .finally(() => setLoading(false));    
  }, []);

  /* helpers */
  const open  = (course) => setSelected(course);
  const close = ()      => setSelected(null);
  const done  = (id)    => {setCompleted([...completed, id]);close();};

  return (
    <div className="education-container">
      {selected ? (
        <CourseDetail course={selected} onClose={close} onComplete={() => done(selected.id)} />
      ) : (
        <>
          <h1>Education Courses</h1>
          {loading && <h2>Loading…</h2>}
          {error   && <h2 className="error-text">{error}</h2>}
          {!loading && !error && (
            <div className="courses-grid">
              {courses.map((c) => (
                <div
                  key={c.id}
                  className={`course-card ${completed.includes(c.id) ? "" : "locked"}`}
                  onClick={() => completed.includes(c.id) && open(c)}
                >
                  <h2>{c.lesson_title}</h2>
                  <p>{c.lesson_description}</p>
                  <button>
                    {completed.includes(c.id) ? "View details" : "Locked"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

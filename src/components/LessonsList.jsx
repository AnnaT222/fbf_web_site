// src/components/LessonsList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LessonsList() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Adjust this URL if your API is hosted elsewhere
    axios.get("http://localhost:8000/api/lessons/")
      .then(response => {
        setLessons(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to fetch lessons");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading lessons...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lessons List</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <strong>{lesson.title}</strong> – {lesson.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

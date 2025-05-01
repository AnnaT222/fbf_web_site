// src/components/LessonsList.jsx

import React, { useEffect, useState } from "react";
import api from "../api/axios";

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;          // ← без этого запрос не уйдёт
    },
    (error) => Promise.reject(error)
  );


export default function LessonsList() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Adjust this URL if your API is hosted elsewhere
    api.get("http://localhost:8000/api/lessons/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        }})
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseDetail from "./CourseDetail"; // Import detailed view
import "./Education.css";
const API_URL = "https://your-api.com/courses"; // Replace with actual API

const Education = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [completedCourses, setCompletedCourses] = useState([]);

  // Fetch courses from API
  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCourses(response.data);
          console.log("API Data Loaded:", response.data);
        } else {
          throw new Error("Invalid API response format.");
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please check the API.");
      })
      .finally(() => setLoading(false));
  }, []);

  // Handle course selection
  const openCourse = (course) => {
    setSelectedCourse(course);
  };

  // Close detail view
  const closeCourse = () => {
    setSelectedCourse(null);
  };

  // Handle course completion (unlock next course)
  const handleCourseCompletion = (courseId) => {
    setCompletedCourses([...completedCourses, courseId]);
    setSelectedCourse(null);
  };

  return (
    <div className="education-container">
      {selectedCourse ? (
        <CourseDetail
          course={selectedCourse}
          onClose={closeCourse}
          onComplete={() => handleCourseCompletion(selectedCourse.id)}
        />
      ) : (
        <>
          <h1>Education Courses</h1>
          {loading ? (
            <h2 className="loading-text">Loading courses...</h2>
          ) : error ? (
            <h2 className="error-text">{error}</h2>
          ) : (
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`course-card ${
                    completedCourses.includes(course.id) ? "" : "locked"
                  }`}
                  onClick={() =>
                    completedCourses.includes(course.id) && openCourse(course)
                  }
                >
                  <h2 className="course-title">{course.title}</h2>
                  <p className="course-description">{course.description}</p>
                  <button className="course-button">
                    {completedCourses.includes(course.id)
                      ? "View Details"
                      : "Locked"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Education;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Navigation
import "./AdminDashboard.css"; // Using same CSS as AdminDashboard for consistency

const AddCourse = () => {
  const [courseId, setCourseId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddCourse = () => {
    if (courseId && courseName) {
      setSuccess(true);
      setCourseId("");
      setCourseName("");
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SAGE</h2>

        <div className="user-info">
          <div className="avatar">A</div>
          <div className="user-details">
            <h4>Admin1</h4>
            <p>System Administrator</p>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="sidebar-cards">
          <Link to="/" className="sidebar-card">
            Dashboard
          </Link>
          <Link to="/admin/teachers" className="sidebar-card">
            Teacher Management
          </Link>
          <Link to="/admin/students" className="sidebar-card">
            Student Management
          </Link>
          <Link to="/admin/add-class" className="sidebar-card">
            Add Class
          </Link>
          <Link to="/admin/course-mapping" className="sidebar-card">
            Course Mapping
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        <h1 className="page-title">Add Course</h1>
        <div className="form-wrapper">
          <div className="form-card">
            <h3>Course Details</h3>

            <input
              type="text"
              placeholder="Course ID"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />

            <button className="primary-btn" onClick={handleAddCourse}>
              Add Course
            </button>

            {success && (
              <p className="success-text">✅ Course added successfully</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;

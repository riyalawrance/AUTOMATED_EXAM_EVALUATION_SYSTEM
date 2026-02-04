import React, { useState } from "react";
import { Link } from "react-router-dom"; // Navigation
import "./AddCourse.css"; // Using same CSS as AddCourse/AddClass

const AddClass = () => {
  const [classId, setClassId] = useState("");
  const [className, setClassName] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAddClass = () => {
    if (classId && className) {
      setSuccess(true);
      setClassId("");
      setClassName("");
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">AEES</h2>

        <div className="user-info">
          <div className="avatar">A</div>
          <div className="user-details">
            <h4>Dr. John Mathew</h4>
            <p>System Administrator</p>
          </div>
        </div>

        <div className="sidebar-cards">
          <Link to="/admin/AdminDashboard" className="sidebar-card">
            Dashboard
          </Link>
          <Link to="/admin/TeacherManagement" className="sidebar-card">
            Teacher Management
          </Link>
          <Link to="/admin/StudentManagement" className="sidebar-card">
            Student Management
          </Link>
          <Link to="/admin/AddCourse" className="sidebar-card">
            Add Course
          </Link>
          <Link to="/admin/CourseMapping" className="sidebar-card">
            Course Mapping
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        <h1 className="page-title">Add Class</h1>
        <div className="form-wrapper">
          <div className="form-card">
            <h3>Class Details</h3>

            <input
              type="text"
              placeholder="Class ID"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />

            <button className="primary-btn" onClick={handleAddClass}>
              Add Class
            </button>

            {success && (
              <p className="success-text">✅ Class added successfully</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddClass;

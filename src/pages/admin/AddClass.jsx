import React, { useState } from "react";
import { Link } from "react-router-dom"; // Navigation
import "./AdminDashboard.css";

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
          <Link to="/admin/add-course" className="sidebar-card">
            Add Course
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

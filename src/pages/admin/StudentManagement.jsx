import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import "./StudentManagement.css";

const StudentManagement = () => {
  const admin = {
    name: "Admin1",
    role: "System Administrator",
  };

  const [activeAction, setActiveAction] = useState(null);
  const [selectedField, setSelectedField] = useState("");

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">SAGE</h2>

        {/* User Info */}
        <div className="user-info">
          <div className="avatar">A</div>
          <div className="user-details">
            <h4>{admin.name}</h4>
            <p>{admin.role}</p>
          </div>
        </div>

        {/* Sidebar links */}
        <div className="sidebar-cards">
          <Link to="/" className="sidebar-card">
            Dashboard
          </Link>
          <Link to="/admin/teachers" className="sidebar-card">
            Teacher Management
          </Link>
          <Link to="/admin/add-course" className="sidebar-card">
            Add Course
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
      <main className="admin-main">
        {/* Logout */}
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        <h1 className="page-title">Student Management</h1>

        <div className="action-cards">
          {/* ADD STUDENT */}
          <div className="action-card-wrapper">
            <div
              className={`action-card ${activeAction === "add" ? "active" : ""}`}
              onClick={() => setActiveAction("add")}
            >
              <h3>Add Student</h3>
            </div>

            {activeAction === "add" && (
              <div className="form-card">
                <h3>Add Student</h3>
                <input placeholder="Roll No" />
                <input placeholder="Admn No" />
                <input placeholder="Name" />
                <input placeholder="Class" />
                <input placeholder="Email ID" />
                <button className="primary-btn">Add Student</button>
              </div>
            )}
          </div>

          {/* UPDATE STUDENT */}
          <div className="action-card-wrapper">
            <div
              className={`action-card ${activeAction === "update" ? "active" : ""}`}
              onClick={() => setActiveAction("update")}
            >
              <h3>Update Student</h3>
            </div>

            {activeAction === "update" && (
              <div className="form-card">
                <h3>Update Student</h3>

                <input placeholder="Enter Student ID" />

                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                >
                  <option value="">Select Field to Update</option>
                  <option value="name">Name</option>
                  <option value="class">Class</option>
                  <option value="email">Email</option>
                </select>

                {selectedField && (
                  <input placeholder={`Enter new ${selectedField}`} />
                )}

                <button className="primary-btn">Update</button>
              </div>
            )}
          </div>

          {/* DELETE STUDENT */}
          <div className="action-card-wrapper">
            <div
              className={`action-card danger-card ${activeAction === "delete" ? "active" : ""}`}
              onClick={() => setActiveAction("delete")}
            >
              <h3>Delete Student</h3>
            </div>

            {activeAction === "delete" && (
              <div className="form-card danger">
                <h3>Delete Student</h3>

                <input placeholder="Enter Student ID" />

                <p className="warning-text">
                  Are you sure you want to delete this student? This action cannot
                  be undone.
                </p>

                <button className="danger-btn">Confirm Delete</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentManagement;

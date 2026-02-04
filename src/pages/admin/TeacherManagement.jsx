import React, { useState } from "react";
import "./TeacherManagement.css";

const TeacherManagement = () => {
  const admin = {
    name: "Dr. John Mathew",
    role: "System Administrator",
  };

  const [activeAction, setActiveAction] = useState(null);
  const [selectedField, setSelectedField] = useState("");

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">AEES</h2>

        <div className="user-info">
            <div className="avatar">A</div>
            <div className="user-details">
                <h4>{admin.name}</h4>
                <p>{admin.role}</p>
            </div>
        </div>
        <div className="sidebar-cards">
          <div className="sidebar-card">Student Management</div>
          <div className="sidebar-card">Add Course</div>
          <div className="sidebar-card">Add Class</div>
          <div className="sidebar-card">Course Mapping</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Logout */}
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        <h1 className="page-title">Teacher Management</h1>

        <div className="action-cards">

  {/* ADD TEACHER CARD */}
  <div className="action-card-wrapper">
    <div
      className={`action-card ${activeAction === "add" ? "active" : ""}`}
      onClick={() => setActiveAction("add")}
    >
      <h3>Add Teacher</h3>
    </div>

    {activeAction === "add" && (
      <div className="form-card">
        <h3>Add Teacher</h3>
        <input placeholder="ID" />
        <input placeholder="Name" />
        <input placeholder="Email ID" />
        <input placeholder="Phone Number" />
        <button className="primary-btn">Add Teacher</button>
      </div>
    )}
  </div>

  {/* UPDATE TEACHER CARD */}
  <div className="action-card-wrapper">
    <div
      className={`action-card ${activeAction === "update" ? "active" : ""}`}
      onClick={() => setActiveAction("update")}
    >
      <h3>Update Teacher</h3>
    </div>

    {activeAction === "update" && (
      <div className="form-card">
        <h3>Update Teacher</h3>

        <input placeholder="Enter Teacher ID" />

        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
        >
          <option value="">Select Field to Update</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
        </select>

        {selectedField && (
          <input placeholder={`Enter new ${selectedField}`} />
        )}

        <button className="primary-btn">Update</button>
      </div>
    )}
  </div>

  {/* DELETE TEACHER CARD */}
  <div className="action-card-wrapper">
    <div
      className={`action-card danger-card ${activeAction === "delete" ? "active" : ""}`}
      onClick={() => setActiveAction("delete")}
    >
      <h3>Delete Teacher</h3>
    </div>

    {activeAction === "delete" && (
      <div className="form-card danger">
        <h3>Delete Teacher</h3>

        <input placeholder="Enter Teacher ID" />

        <p className="warning-text">
          Are you sure you want to delete this teacher? This action cannot be undone.
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

export default TeacherManagement;

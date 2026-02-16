import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const admin = {
    name: "Admin1",
    role: "System Administrator",
    email: "admin@aees.edu",
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SAGE</h2>

        <div className="user-info">
          <div className="avatar">{admin.name.charAt(0)}</div>
          <div className="user-details">
            <h4>{admin.name}</h4>
            <p>{admin.role}</p>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="main">
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        {/* Header */}
        <h1 className="page-title">Dashboard</h1>
    

        {/* Feature Cards */}
        <section className="card-grid">
          <Link to="/admin/teachers" className="dash-card">
            <h3>Teacher Management</h3>
          </Link>
          <Link to="/admin/students" className="dash-card">
            <h3>Student Management</h3>
          </Link>
          <Link to="/admin/add-course" className="dash-card">
            <h3>Add Course</h3>
          </Link>
          <Link to="/admin/add-class" className="dash-card">
            <h3>Add Class</h3>
          </Link>
          <Link to="/admin/course-mapping" className="dash-card">
            <h3>Course Mapping</h3>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;

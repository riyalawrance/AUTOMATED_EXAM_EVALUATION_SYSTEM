import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const admin = {
    name: "Dr. John Mathew",
    role: "System Administrator",
    email: "admin@aees.edu",
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">AEES</h2>

        <div className="user-info">
          <div className="avatar">{admin.name.charAt(0)}</div>
          <div className="user-details">
            <h4>{admin.name}</h4>
            <p>{admin.role}</p>
          </div>
        </div>

        <div className="sidebar-cards">
          <Link to="/admin/teachers" className="sidebar-card">
            Teacher Management
          </Link>
          <Link to="/admin/students" className="sidebar-card">
            Student Management
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

      {/* Main Area */}
      <main className="admin-main">
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        {/* Header */}
        <header className="admin-header">
          <h1 className="page-title">Dashboard</h1>
          <p>Welcome back, {admin.name}!</p>
        </header>

        {/* Feature Cards */}
        <section className="admin-cards">
          <Link to="/admin/TeacherManagement" className="admin-card">
            <h3>Teacher Management</h3>
            <p>View and manage all teachers.</p>
          </Link>
          <Link to="/admin/StudentManagement" className="admin-card">
            <h3>Student Management</h3>
            <p>View and manage all students.</p>
          </Link>
          <Link to="/admin/AddCourse" className="admin-card">
            <h3>Add Course</h3>
            <p>Create new courses.</p>
          </Link>
          <Link to="/admin/AddClass" className="admin-card">
            <h3>Add Class</h3>
            <p>Create new classes.</p>
          </Link>
          <Link to="/admin/CourseMapping" className="admin-card">
            <h3>Course Mapping</h3>
            <p>Map courses, classes, and teachers.</p>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./student.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        {/* UPDATED NAME */}
        <h2 className="admin-logo">SAGE</h2>

        <div className="user-info">
        <div className="avatar">S</div>
        <div className="user-details">
         <h3>Ammu</h3>
        <p>Student</p>
         </div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Logout */}
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        <h1 className="dashboard-title">DASHBOARD</h1>

        {/* Dashboard Cards */}
        <div className="action-cards">
          <div
            className="action-card big-card"
            onClick={() => navigate("./result")}
          >
            <h3 className="card-title">View Result</h3>
          </div>

          <div
            className="action-card big-card"
            onClick={() => navigate("./answer-key")}
          >
            <h3 className="card-title">View Answer Key</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;

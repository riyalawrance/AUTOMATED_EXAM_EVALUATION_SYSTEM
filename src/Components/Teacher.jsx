import React from "react";
import "./Teacher.css";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const navigate = useNavigate();

  return (
    <div className="teacher-page">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SAGE</h2>

        {/* Login Info */}
        <div className="user-info">
          <div className="avatar">T</div>
          <div className="user-details">
            <h4>Teacher Name</h4>
            <p>Teacher</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="evaluation-content">
        {/* Logout */}
        <button
          className="top-logout"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>

        <h1>Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="dashboard">
          <div
            className="card"
            onClick={() => navigate("/evaluation")}
          >
            Evaluation
          </div>

          <div
            className="card"
            onClick={() => navigate("/view-mark")}
          >
            View Result
          </div>

          <div
            className="card"
            onClick={() => navigate("/reference-answer")}
          >
            Reference Answer
          </div>

          <div
            className="card"
            onClick={() => navigate("/revaluation")}
          >
            Revaluation
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teacher;

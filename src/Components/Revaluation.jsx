import React, { useState } from "react";
import "./Revaluation.css";
import { useNavigate } from "react-router-dom";

const Revaluation = () => {
  const navigate = useNavigate();

  // Sample revaluation requests
  const [requests, setRequests] = useState([
    { id: 1, student: "Alice", class: "S2", exam: "Series Test 1" },
    { id: 2, student: "Bob", class: "S3", exam: "Series Test 2" },
  ]);

  const handleRevalued = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const pendingCount = requests.length;

  return (
    <div className="revaluation-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SAGE</h2>

        <div className="user-info">
          <div className="avatar">T</div>
          <div className="user-details">
            <h4>Teacher Name</h4>
            <p>Teacher</p>
          </div>
        </div>

        <nav className="menu">
          <button onClick={() => navigate("/teacher")}>Dashboard</button>
          <button onClick={() => navigate("/evaluation")}>Evaluation</button>
          <button onClick={() => navigate("/view-mark")}>View Results</button>
          <button onClick={() => navigate("/reference-answer")}>Reference Answer</button>
          <button className="active">
            Revaluation
            {pendingCount > 0 && (
              <span className="notification">{pendingCount}</span>
            )}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="revaluation-content">
        <div className="top-bar">
          <button className="logout-btn" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>

        <h1>Revaluation Requests</h1>

        {requests.map((req) => (
          <div className="revaluation-card" key={req.id}>
            <div className="revaluation-header">
              <h3>RollNo:{req.id} <br />Name:{req.student}</h3>
              
              <span>{req.class} | {req.exam}</span>
            </div>
            <div className="revaluation-content-box">
              <p>
                Revaluation for <b>{req.exam}</b> in class <b>{req.class}</b>.
              </p>
              <button
                className="revalued-btn"
                onClick={() => handleRevalued(req.id)}
              >
                Revalued
              </button>
            </div>
          </div>
        ))}

        {requests.length === 0 && <p>No revaluation requests.</p>}
      </main>
    </div>
  );
};

export default Revaluation;

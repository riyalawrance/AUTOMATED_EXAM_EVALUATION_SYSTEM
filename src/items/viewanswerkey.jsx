import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./student.css";

const ViewAnswerKey = () => {
  const navigate = useNavigate();
  const [exam, setExam] = useState("");

  const handleViewAnswerKey = () => {
    if (!exam) {
      alert("Please select an exam");
      return;
    }
    console.log("Selected exam for answer key:", exam);
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">SAGE</h2>

        <div className="user-info">
          <div className="avatar">S</div>
          <div className="user-details">
            <h4>Ammu</h4>
            <p>Student</p>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <div
            className="sidebar-item"
            onClick={() => navigate("/")}
          >
            Dashboard
          </div>

          <div
            className="sidebar-item"
            onClick={() => navigate("/result")}
          >
            View Result
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Logout */}
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        {/* View Answer Key Section */}
        <div className="answer-key-container">
          <h1 className="answer-key-title">View Answer Key</h1>

          <select
            className="select-input"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
          >
            <option value="">Select Exam</option>
            <option value="DS">Data Structures</option>
            <option value="OS">Operating Systems</option>
            <option value="DBMS">DBMS</option>
          </select>

          <button className="primary-btn" onClick={handleViewAnswerKey}>
            View Answer Key
          </button>
        </div>
      </main>
    </div>
  );
};

export default ViewAnswerKey;

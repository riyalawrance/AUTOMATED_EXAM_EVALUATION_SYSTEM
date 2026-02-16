import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./student.css";

const ViewResult = () => {
  const navigate = useNavigate();
  const [exam, setExam] = useState("");

  const handleViewResult = () => {
    if (!exam) {
      alert("Please select an exam");
      return;
    }
    console.log("Selected exam:", exam);
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
            onClick={() => navigate("/answer-key")}
          >
            View Answer Key
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Logout */}
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        {/* View Result Section */}
        <div className="view-result-container">
          <h1 className="view-result-title">View Result</h1>

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

          <button className="primary-btn" onClick={handleViewResult}>
            View Result
          </button>
        </div>
      </main>
    </div>
  );
};

export default ViewResult;

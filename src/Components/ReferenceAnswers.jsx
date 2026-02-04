import React, { useState } from "react";
import "./ReferenceAnswers.css";
import { useNavigate } from "react-router-dom";

const ReferenceAnswer = () => {
  const navigate = useNavigate();

   const [approved, setApproved] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="reference-page">
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
          <button className="active">Reference Answer</button>
          <button onClick={() => navigate("/revaluation")}>Revaluation</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="reference-content">
        <div className="top-bar">
          <button className="logout-btn" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>

        <h1>Reference Answer</h1>

        {/* Filters */}
        <div className="filter-card">
          <div className="filter-group">
            <label>Class</label>
            <select>
              <option>Select Class</option>
              <option>S1</option>
              <option>S2</option>
              <option>S3</option>
              <option>S4</option>
              <option>S5</option>
              <option>S6</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Course</label>
            <select>
              <option>Select Course</option>
              <option>Data Structures</option>
              <option>DBMS</option>
              <option>OS</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Exam</label>
            <select>
              <option>Select Exam</option>
              <option>Series Test 1</option>
              <option>Series Test 2</option>
            </select>
          </div>

          <button
            className="view-btn"
            onClick={() => setShowAnswer(true)}
          >
            View Reference Answer
          </button>
        </div>

        {/* Reference Answer Section */}
        {showAnswer && (
          <div className="reference-card">
           <div className="reference-header">
  <h3>Reference Answer</h3>

  {!approved ? (
    <button
      className="approve-btn"
      onClick={() => setApproved(true)}
    >
      Approve
    </button>
  ) : (
    <div className="approved-actions">
      <span className="approved-text">Approved</span>
      <button className="view-btn">View</button>
    </div>
  )}
</div>


          </div>
        )}
      </main>
    </div>
  );
};

export default ReferenceAnswer;

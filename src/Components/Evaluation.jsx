import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Evaluation.css";

const Evaluation = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="evaluation-layout">
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

        <ul className="menu">
          <li onClick={() => navigate("/teacher")}>Dashboard</li>
          <li className="active">Evaluation</li>
          <li onClick={() => navigate("/view-mark")}>View Results</li>
          <li onClick={() => navigate("/reference-answer")}>
            Reference Answers
          </li>
          <li onClick={() => navigate("/revaluation")}>Revaluation</li>
        </ul>
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

        <h1>Evaluation</h1>

        {/* Add Exam Button */}
        <button
          className="add-exam-btn"
          onClick={() => setShowForm(!showForm)}
        >
          Add Exam +
        </button>

        {/* Add Exam Form */}
        {showForm && (
          <div className="exam-form">
            <h3>Add New Exam</h3>

            <div className="form-group">
              <label>Class</label>
              <select>
                <option value="">Select Class</option>
                <option>S1</option>
                <option>S2</option>
                <option>S3</option>
                <option>S4</option>
                <option>S5</option>
                <option>S6</option>
              </select>
            </div>

            <div className="form-group">
              <label>Course</label>
              <select>
                <option value="">Select Course</option>
              </select>
            </div>

            <div className="form-group">
              <label>Exam Type</label>
              <select>
                <option value="">Select Exam</option>
                <option>Series Test 1</option>
                <option>Series Test 2</option>
              </select>
            </div>

           <button
            className="save-btn"
            onClick={() => navigate("/upload-materials")}
            >
            Save Exam
            </button>

          </div>
        )}
      </main>
    </div>
  );
};

export default Evaluation;

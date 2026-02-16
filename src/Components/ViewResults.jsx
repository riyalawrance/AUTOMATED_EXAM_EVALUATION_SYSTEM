import React, { useState } from "react";
import "./ViewResults.css";
import { useNavigate } from "react-router-dom";

const ViewResults = () => {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="results-page">
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
          <button className="active">View Results</button>
          <button onClick={() => navigate("/reference-answer")}>
            Reference Answer
          </button>
          <button onClick={() => navigate("/revaluation")}>Revaluation</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="results-content">
        <div className="top-bar">
          <button className="logout-btn" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>

        <h1>View Results</h1>

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
            onClick={() => setShowResults(true)}
          >
            View Results
          </button>
        </div>

        {/* Results Table */}
        {showResults && (
          <div className="results-table-card">
            <h3>Mark Matrix</h3>

            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Q1</th>
                  <th>Q2</th>
                  <th>Q3</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>101</td>
                  <td>Anu</td>
                  <td>8</td>
                  <td>7</td>
                  <td>9</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Rahul</td>
                  <td>6</td>
                  <td>8</td>
                  <td>7</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Sneha</td>
                  <td>9</td>
                  <td>9</td>
                  <td>8</td>
                  <td>26</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default ViewResults;

import React from "react";
import "./UploadMaterials.css";
import { useNavigate } from "react-router-dom";

const UploadMaterials = () => {
  const navigate = useNavigate();

  return (
    <div className="upload-page">
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
          <button className="active">Evaluation</button>
          <button onClick={() => navigate("/view-mark")}>View Results</button>
          <button onClick={() => navigate("/reference-answer")}>
            Reference Answer
          </button>
          <button onClick={() => navigate("/revaluation")}>Revaluation</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="upload-content">
        <div className="top-bar">
          <button className="logout-btn" onClick={() => navigate("/login")}>
            Logout
          </button>
        </div>

        {/* Exam Title */}
        <h1 className="exam-title">Series Test 1 – S3 – Data Structures</h1>

        {/* Upload Card */}
        <div className="upload-card">
          <h3>Upload Evaluation Materials</h3>

          <div className="upload-grid">
            <div className="upload-box">
              <label>Question Paper</label>
              <input type="file" />
            </div>

            <div className="upload-box">
              <label>Reference Text</label>
              <input type="file" />
            </div>

            <div className="upload-box">
              <label>Marking Scheme</label>
              <input type="file" />
            </div>

            <div className="upload-box">
            <label>Student Answer Scripts</label>
             <input
                type="file"
                 webkitdirectory="true"
                directory=""
                multiple/>
            </div>

          </div>

          <button className="evaluate-btn">
            Evaluate Answers
          </button>
        </div>
      </main>
    </div>
  );
};

export default UploadMaterials;

import React, { useState } from "react";
import "./AddCourse.css"; // Reusing the same CSS

const CourseMapping = () => {
  // Placeholder data simulating database values
  const classes = ["Class 1", "Class 2", "Class 3"];
  const courses = ["Math", "Science", "History"];
  const teachers = ["Dr. John Mathew", "Ms. Sarah Lee", "Mr. Alex Kim"];

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [success, setSuccess] = useState(false);

  const handleMapCourse = () => {
    if (selectedClass && selectedCourse && selectedTeacher) {
      setSuccess(true);
      // Reset selections
      setSelectedClass("");
      setSelectedCourse("");
      setSelectedTeacher("");
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">AEES</h2>

        <div className="user-info">
          <div className="avatar">A</div>
          <div className="user-details">
            <h4>Dr. John Mathew</h4>
            <p>System Administrator</p>
          </div>
        </div>

        <div className="sidebar-cards">
          <div className="sidebar-card">Teacher Management</div>
          <div className="sidebar-card">Student Management</div>
          <div className="sidebar-card">Add Course</div>
          <div className="sidebar-card">Add Class</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="logout-container">
          <button className="logout-btn-top">Logout</button>
        </div>

        <h1 className="page-title">Course Mapping</h1>

        <div className="form-wrapper">
          <div className="form-card">
            <h3>Map Course to Class & Teacher</h3>

            {/* Class Dropdown */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              style={{ width: "100%", padding: "14px", marginBottom: "20px", borderRadius: "8px", fontSize: "15px", border: "1px solid #ccc" }}
            >
              <option value="">Select Class</option>
              {classes.map((cls, idx) => (
                <option key={idx} value={cls}>
                  {cls}
                </option>
              ))}
            </select>

            {/* Course Dropdown */}
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              style={{ width: "100%", padding: "14px", marginBottom: "20px", borderRadius: "8px", fontSize: "15px", border: "1px solid #ccc" }}
            >
              <option value="">Select Course</option>
              {courses.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>

            {/* Teacher Dropdown */}
            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              style={{ width: "100%", padding: "14px", marginBottom: "20px", borderRadius: "8px", fontSize: "15px", border: "1px solid #ccc" }}
            >
              <option value="">Select Teacher</option>
              {teachers.map((teacher, idx) => (
                <option key={idx} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>

            <button className="primary-btn" onClick={handleMapCourse}>
              Map Course
            </button>

            {success && (
              <p className="success-text">✅ Course mapped successfully!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseMapping;

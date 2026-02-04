import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherManagement from "./pages/admin/TeacherManagement";
import StudentManagement from "./pages/admin/StudentManagement";
import AddCourse from "./pages/admin/AddCourse";
import AddClass from "./pages/admin/AddClass";
import CourseMapping from "./pages/admin/CourseMapping";

function App() {
  return (
    <Router>
      <Routes>
        {/* Start directly at AdminDashboard */}
        <Route path="/" element={<AdminDashboard />} />

        {/* Pages navigated from dashboard cards */}
        <Route path="/admin/teachers" element={<TeacherManagement />} />
        <Route path="/admin/students" element={<StudentManagement />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/add-class" element={<AddClass />} />
        <Route path="/admin/course-mapping" element={<CourseMapping />} />

        {/* Redirect unknown paths to dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

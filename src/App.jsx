<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Teacher from "./Components/Teacher.jsx";
import Evaluation from "./Components/Evaluation.jsx";
import ViewResults from "./Components/ViewResults.jsx";
import ReferenceAnswer from "./Components/ReferenceAnswers.jsx";
import Revaluation from "./Components/Revaluation.jsx";
import Login from "./Components/Login.jsx";
import UploadMaterials from "./Components/UploadMaterials.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Teacher />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/evaluation" element={<Evaluation />} />
      <Route path="/upload-materials" element={<UploadMaterials />} />
      <Route path="/view-mark" element={<ViewResults />} />
      <Route path="/reference-answer" element={<ReferenceAnswer />} />
       <Route path="/revaluation" element={<Revaluation />} />


      <Route path="/login" element={<Login />} />
    </Routes>
=======
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
>>>>>>> f37cfedcc2d28f0907eae169eaa4a700de557ebb
  );
}

export default App;

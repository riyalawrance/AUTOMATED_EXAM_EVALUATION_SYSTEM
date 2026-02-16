<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import StudentDashboard from "./items/studentdashboard";
import ViewAnswerKey from "./items/viewanswerkey";
import ViewResult from "./items/viewresult";
=======
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
>>>>>>> 2c34cb418a135f9ea9c583845e39b137471ee355

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* Default page */}
        <Route path="/" element={<StudentDashboard />} />

        {/* Dashboard navigation pages */}
        <Route path="/answer-key" element={<ViewAnswerKey />} />
        <Route path="/result" element={<ViewResult />} />
=======
        {/* Start directly at AdminDashboard */}
        <Route path="/" element={<AdminDashboard />} />

        {/* Pages navigated from dashboard cards */}
        <Route path="/admin/teachers" element={<TeacherManagement />} />
        <Route path="/admin/students" element={<StudentManagement />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/add-class" element={<AddClass />} />
        <Route path="/admin/course-mapping" element={<CourseMapping />} />
>>>>>>> 2c34cb418a135f9ea9c583845e39b137471ee355

        {/* Redirect unknown paths to dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
<<<<<<< HEAD
=======
>>>>>>> f37cfedcc2d28f0907eae169eaa4a700de557ebb
>>>>>>> 2c34cb418a135f9ea9c583845e39b137471ee355
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import StudentDashboard from "./items/studentdashboard";
import ViewAnswerKey from "./items/viewanswerkey";
import ViewResult from "./items/viewresult";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<StudentDashboard />} />

        {/* Dashboard navigation pages */}
        <Route path="/answer-key" element={<ViewAnswerKey />} />
        <Route path="/result" element={<ViewResult />} />

        {/* Redirect unknown paths to dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

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
  );
}

export default App;

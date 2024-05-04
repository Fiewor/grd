import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assessments from "./components/Assessments";
import Results from "./components/Results";
import Landing from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Landing />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="results" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;

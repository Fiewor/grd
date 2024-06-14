import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Assessments from "./components/Assessments";
import Results from "./components/Results";
import Landing from "./components/Landing";
import Details from "./components/Details";
import Submissions from "./pages/Submissions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Landing />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="results">
          <Route index element={<Results />} />
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="submissions" element={<Submissions />} />
      </Route>
    </Routes>
  );
}

export default App;

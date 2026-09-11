import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/HomePage/Home'
import CV from './pages/CV/CV';
import Run from './pages/Run/Run'
// import Projects from './pages/Projects/Projects'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/run" element={<Run />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App;

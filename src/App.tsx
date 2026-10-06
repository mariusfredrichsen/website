import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/HomePage/Home'
import CV from './pages/CV/CV';
import Run from './pages/Run/Run'
import LattePage from './pages/LatteArt/LattePage';
import MasterPage from './pages/Master/MasterPage';
import Projects from './pages/Projects/Projects'
import ProjectDetail from './pages/Projects/ProjectDetail'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/run" element={<Run />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/lart" element={<LattePage />} />
      <Route path="/master" element={<MasterPage />} />
    </Routes>
  )
}

export default App;

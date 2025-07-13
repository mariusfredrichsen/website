import './App.css'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage/HomePage'
import CV from './pages/CV/CV';
import Run from './pages/Run/Run'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/run" element={<Run />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App;

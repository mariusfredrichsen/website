import './App.css'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage/HomePage'
import CV from './pages/CV/CV';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CV />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App;

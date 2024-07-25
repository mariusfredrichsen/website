import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Ribbon from './Ribbon';
import CV from './CV';
import Duck from './Duck.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/duck" element={<Duck />} />
      </Routes>
    </Router>
  );
}

export default App;
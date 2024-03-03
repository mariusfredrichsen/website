import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Ribbon from './Ribbon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ribbon" element={<Ribbon />} />
      </Routes>
    </Router>
  );
}

export default App;
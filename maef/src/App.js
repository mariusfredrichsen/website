import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Ribbon from './Ribbon';
import CV from './CV';
import Duck from './Duck.js';
import Strava from './Strava.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/duck" element={<Duck />} />
        <Route path="/strava" element={<Strava />} />
      </Routes>
    </Router>
  );
}

export default App;
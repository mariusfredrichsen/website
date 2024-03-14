import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Ribbon from './Ribbon';
import CV from './CV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/CV" element={<CV />}/>
      </Routes>
    </Router>
  );
}

export default App;
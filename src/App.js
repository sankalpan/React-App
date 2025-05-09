

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />
        <Route path="/:category" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;

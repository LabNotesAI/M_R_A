import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentPage from './pages/DocumentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents/:id" element={<DocumentPage />} />
      </Routes>
    </Router>
  );
}

export default App;

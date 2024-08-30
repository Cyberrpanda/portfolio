import React from 'react';
import './index.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './home';



function App() {
  return (
    <Router>
    <ErrorBoundary>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      </Routes>  
    </ErrorBoundary>
  </Router>
  );
}

export default App;

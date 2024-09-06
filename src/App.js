import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './home';
import Lore from './mylore';
import Stack from './stack';
import Showcase from './showcase';
import Reason from './reason';
import Contact from './contactinfo';


function App() {
  return (
    <ErrorBoundary>
      <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/home" element={<Home />}></Route>
      <Route path="/mylore" element={<Lore />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/reason" element={<Reason />} />
      <Route path="/contactinfo" element={<Contact />} />
      </Routes>  
    </ErrorBoundary>
  
  );
}

export default App;

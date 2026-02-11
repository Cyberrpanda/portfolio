import React from 'react';
import './index.css';

// Layout Components
import Navbar from './navbar';
import Footer from './footer';
import ErrorBoundary from './ErrorBoundary';

// Section Components
import Herosection from './herosection';
import Stack from './stack';
import Flex from './flex';
import Showcase from './showcase';
import Reason from './reason';
import Educate from './educate';
import Contact from './contactinfo';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />

        <main className="flex-1">
          {/* We use IDs here so your Navbar links know where to jump */}
          <section id="hero"><Herosection /></section>
          <section id="stack"><Stack /></section>
          <section id="flex"><Flex /></section>
          <section id="showcase"><Showcase /></section>
          <section id="reason"><Reason /></section>
          <section id="educate"><Educate /></section>
          <section id="contact"><Contact /></section>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
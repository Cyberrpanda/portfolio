import React from 'react';
import './index.css';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';
import Lore from './mylore';
import Stack from './stack';


export default function App() {
    return (
      <div>
        <Home>
          <Navbar />
          
          <br />
         
          <br />
          
          <Lore/>

          <Stack/>
  
          <Footer />
        </Home>
      </div>
    );
  }
  
import React from 'react';
import './index.css';
import Navbar from './navbar';
import Footer from './footer';
import Lore from './mylore';
import Stack from './stack';
import Flex from './flex';
import Reason from './reason';
import Educate from './educate';
import Showcase from './showcase';
import Contact from './contactinfo';

export default function Home () {
   return (
    <>
       <div className="opening" id="home">
        <Navbar />
        <div className="">
            <section className=" introtext">
                Welcome, I'm<br />
               <h1>ITHIEL BALOGUN </h1>
                Software Engineer
                <br />
                <br />
               



            </section>
        </div>
      </div>

       <Lore/>
       

       <Stack/>

       <Flex/>

       <Showcase/>

       <Reason/>

       <Educate/>
       
       <Contact/>

      <Footer/>

    </>
   );
}
import React from 'react';
import './index.css';
import Navbar from './navbar';
import Footer from './footer';
import Lore from './mylore';
import Stack from './stack';
import Flex from './flex';
import Reason from './reason';
import Educate from './educate';

export default function Home () {
   return (
    <>
       <div className="opening">
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

       <Reason/>

       <Educate/>

      <Footer/>

    </>
   );
}
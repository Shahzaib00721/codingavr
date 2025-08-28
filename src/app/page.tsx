import React from 'react';
import Image from 'next/image';
import NewNavbar from './components/NewNavbar';
import Newbar from './components/Newbar';
import Check from './components/Check';
import Section from './components/Section';
import Events from './components/Events';
import NewPics from './components/NewPics';
import NewTag from './components/NewTag';
import LeftPic from './components/LeftPic';
import NewFlex from './components/NewFlex';
import NewDiv from './components/NewDiv';
import SubscribeSection from './components/SubscribeSection';
import './globals.css'; 
import { Poppins, Inter, Geist, Geist_Mono } from 'next/font/google';
import Footer from './components/Footer';

import { Open_Sans } from 'next/font/google';
import NavContact from './components/NavContact';
import NewOut from './components/NewOut';
import { imageOptimizer } from 'next/dist/server/image-optimizer';





export default function Home() {  
  return (
    
      <div>
        <></>
        <NewNavbar/>

        <div className="absolute inset-0 overflow-hidden">
        <img className="w-1920 h-172 object-cover * bg-cover * bg-center bg-no-repeat "
          src="/bgimg.jpg  "
          alt="RV Show" 
            draggable="false" 
        /> 
        
       
      </div>
 <section className="relative w-full h-screen mt-10">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bgimg.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-open_sans text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Explore the Future <br /> With <span className="inline-block">
            <Image
              src="/avr.png" // VRA logo path
              alt="VRA"
              width={150}
              height={50}
              className="inline-block ml-2"
            />
          </span>
        </h1>
        <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition ">
              Book Now →
          </button>
          <button className="px-6 py-3 font-open_sans text-white rounded-full hover:bg-white hover:text-black transition">
            Explore VR Packages
          </button>
        </div>
      </div>

<div>
  <NavContact/>

 <hr/>
</div>

 
  <NewOut/>
 <hr/>
 <Newbar/>
<hr/>
  <Check/>
  <hr/>
 <Section/>

 <hr/>

 <section>
       <Events/>
     </section>
     


<section>
  <NewPics/>
</section>

<section>
  <NewTag/>
</section>
    
<section>
  <LeftPic/>
</section>

<section>
  <NewFlex/>
</section>

<section>
  <NewDiv/>
</section>

<section>
  <SubscribeSection/>
</section>

<section>
  <Footer/>
</section>

    </section>
    
    
    

      
      </div>
    
  );
}



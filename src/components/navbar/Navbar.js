import React from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { IoFlash } from "react-icons/io5";
import '../navbar/navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="flex ">
               <div className="mx-2">
                 <HiMenuAlt4 color="#fff" size="2rem" />
               </div> 
               <div className="mx-6">
                 <IoFlash color="#fff" size="1.5rem" /> 
               </div>
            </div>
            <div className="flex "> 
               <div className="mx-2 my-1">
                   <p className="nav-text1">opens in <span className="nav-text2"> 16d 13h 54m 48s</span> </p>
               </div>
               <div className="mx-2">
                  <button >Get Notified</button>
               </div>
            </div>
        </div>
    )
}

export default Navbar

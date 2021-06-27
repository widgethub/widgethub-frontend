import React, { useState } from 'react';
import '../css/Login.css';

import Swal from 'sweetalert2'
import { saveToken } from '../services/auth.service';
import axios from 'axios';
import { API_URL } from '../config'
import {
    Link,
    useHistory
} from "react-router-dom";

import Logo from '../assets/logo.png'
import Whale from '../assets/whale.jpg'

export default function LayoutLogin({children}) {
    const [whalecum, setWhaleCum] = useState(false);
    const [whalecumcounter, setWhaleCumCounter] = useState(0);

    function updateEasterEgg(){
      setWhaleCumCounter(whalecumcounter + 1)
      if(whalecumcounter == 5) {
        setWhaleCum(true);
        setWhaleCumCounter(0);
      }
    }
  
    return(
      <div>
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
              <img className="headelement logo" onClick={() => updateEasterEgg()}src={Logo} alt="logo"/>
            </div>
  
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p className="text-center text-3xl">{whalecum === true? 'Whalecum.': 'Welcome.'}</p>
                {children}
            </div>
          </div>
          <div className="w-1/2 shadow-2xl">
              <img className="object-cover w-full h-screen hidden md:block" src={whalecum === true? Whale: "https://source.unsplash.com/IXUM4cJynP0"}/>
          </div>
        </div>
      </div>
    )
  }
import { motion } from "framer-motion";
import React, { useState } from 'react';
import CosmoBase from "../assets/c2.png";
import './header.css';
const useHeader = () => {

    // const ref = useRef();
    const [Toggle,changeToggle] = useState(false);
  return (
    <div className='p-8'>
        <div className='flex justify-between'>
            <div>
                <icon><img className='text-white x' width={'160px'} src={CosmoBase} alt='title not found'></img></icon>
            </div>
           
            <div className='flex gap-x-4 cursor-pointer'>
                <div className="hide cursor-pointer" onClick={()=>{window.location.href='/'}}>Home</div>
                <div className="hide cursor-pointer" onClick={()=>{window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfRYxYUtbgLPMdEMB6_ao05S56hxUwpK6-KUS6O73lST49-Vg/viewform'}}>Contact</div>
                <motion.div  className='flex flex-col w-fit hvr' style={{color : '#ff934e'}}>
                <div className='flex gap-x-2 w-fit'   ><div className="cursor-pointer" onClick={()=>{window.location.href='https://docs.numia.xyz/overview/what-is-numia'}}>Docs</div> <div className="hvricon"><motion.i  class="fa-solid fa-right-long "></motion.i></div> </div>
                <div  className='line' style={{width : '100%', backgroundColor: '#ff934e' , height : '1px'}}></div>
                </motion.div>
                <div className="hamburger" onClick={()=>{changeToggle((prev)=>!prev)}}><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e162a57dc9c48b5ef90dc_icons8-menu-rounded-240.png" width={'30px'}></img></div>
            </div>

        </div>
        {Toggle && <div className="header__animate show">
            <div>Home</div>
            <div>Contact</div>
            </div>}
    </div>
  )
}

export default useHeader
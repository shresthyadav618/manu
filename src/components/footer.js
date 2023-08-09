import React from 'react'
import c2 from "../assets/c2.png"
import "./maincontainer.css"
const footer = () => {
  return (
    <div className='flex footer'>
        <div className='flex flex-col ftr1'>
            <img width={'120px'} className='x' src={c2}></img>
            <div>The Cosmos Data & Development Platform</div>
        </div>
        <div className='flex ftr2'>
            <div className='flex flex-col'>
                <div  className='font-bold mb-4'>Navigation</div>
                <div className='cursor-pointer' onClick={()=>{
                    window.location.href='/'
                }}>Home</div>
                <div className='cursor-pointer' onClick={()=>{
                    window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfRYxYUtbgLPMdEMB6_ao05S56hxUwpK6-KUS6O73lST49-Vg/viewform'
                }}>Contact</div>
                </div>
            <div className='flex flex-col cursor-pointer'>
                <div  className='font-bold mb-4 '>Resources</div>
                <div onClick={()=>{
                    window.location.href='https://docs.numia.xyz/overview/sql-access'
                }}>Docs</div>
            </div>
            <div className='flex flex-col cursor-pointer'>
                <div className='font-bold mb-4'>Social</div>
                <div  className='flex gap-x-4'><i onClick={()=>{
                    window.location.href='https://twitter.com/numiadata';
                }} class="fa-brands fa-twitter"></i>
                <i onClick={()=>{
                    window.location.href='https://dribbble.com/following';
                }} class="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
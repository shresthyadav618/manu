import React from 'react';
import './graycontainer.css';
const graycontainer = () => {
  return (
    <div className='flex gcon'>
        <div className='flex flex-col gap-y-6'><div className='text-3xl font-bold'>Scalable infrastructure to build Cosmos apps fast and easy.</div> <div className='flex gap-x-4 hvr'>  <div className='flex flex-col '><div className='flex gap-x-4 cursor-pointer' onClick={()=>{
            window.location.href='https://docs.numia.xyz/overview/what-is-numia';
        }}><div style={{color: '#ff934e'}} className='cursor-pointer' >Get Started</div>  <div style={{color : '#ff934e'}}><i  class="fa-solid fa-right-long "></i></div></div>
        
        <div className='line' style={{width : '100%', backgroundColor: '#ff934e' , height : '1px'}}></div>
         </div></div></div> 
       
        

        <div className='flex flex-col rcon'>
            <div>Numia is an on-chain Data Indexer and RPC provider that gives you the infrastructure to build apps fast and easy.</div>
            <div>You can forget about managing complicated infrastructure or running complicated RPC queries for things that should be simple.</div>
            <div>Numia does this for you.</div>
        </div>
    </div>
  )
}

export default graycontainer

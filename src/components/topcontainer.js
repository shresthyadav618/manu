import React from 'react'
import "./topcontainer.css"
const topcontainer = () => {
  return (
    <div className='flex flex-col justify-center items-center relative tc' style={{height: '100vh'}}>
        <div className='subcontainer flex flex-col gap-y-12'>
            <div className='large  '>The Cosmos <p className='inline-block' style={{color: '#01b4db'}}>Data</p> & <p className='inline-block' style={{color: '#ff56a8'}}>Development</p> Platform</div>
            <div className=''>Infrastrcture to BUILD,MONITOR and GROW your project in Cosmos</div>
        </div>
        <div className='company flex flex-col absolute text-xl' style={{bottom : '40px'}}>
            <div>Trusted by the top projects in Cosmos</div>
            <div className='flex justify-between items-center topimage'  >
                <img width={'15%'} alt='no image' style={{objectFit: 'contain', opacity:'0.9'}} src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1999e3d48e15ebfdeee0_osmosis-logo.png'></img>
                <img width={'15%'} alt='no image' style={{objectFit: 'contain', opacity:'0.9'}} src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e0f4ce2e765acbe97e0_evmos-logo.png'></img>
                <img width={'15%'} alt='no image' style={{objectFit: 'contain', opacity:'0.9'}} src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e1066f31612fe9cfaaf_stride-logo.png'></img>
                <img width={'15%'} alt='no image' style={{objectFit: 'contain', opacity:'0.9'}} src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e0fab34c57022119cac_quasar-logo.png'></img>
                <img width={'15%'} alt='no image' style={{objectFit: 'contain', opacity:'0.9'}} src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1ecaf9ec8f9d0f65685a_umee-logo.png'></img>
                <img width={'15%'} alt='no image' style={{objectFit: 'contain', opacity:'0.9'}} src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e7610547b46adab4b5a3e_wynd-logo.png'></img>
            </div>
        </div>
        
    </div>
  )
}

export default topcontainer
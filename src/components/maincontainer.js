import React from 'react';
import ProductCard from './ProductCard';
import './maincontainer.css';
import SmallCard from './smallcard';
import SubProductCard from './subProductCard';
const maincontainer = () => {

    const product = [{image: "https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646f147125e89c906ac8ccde_sql-banner-p-500.png",heading:"Query on-chain data",redirect : "Get SQL Access",content:"Run SQL queries across all Cosmos chains to run analytics for your app and the whole ecosystem." , main:"SQL Access" , link:"https://docs.numia.xyz/overview/sql-access"},{image: "https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646f14cb759f502b1d1ad21c_rpc-banner-p-500.png",heading:"Scalable and fast RPCs",redirect : "Get RPC Access",content:"Distributed RPC nodes for all Cosmos chains so that you can focus on product. Scalable, reliable and fast." , main:"RPC Access" , link:"https://docs.numia.xyz/overview/rpc-api-access"},{image: "https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/64b7914758a3b6529220b76a_api-banner-p-500.png",heading:"Aggregated API endpoints",redirect : "Get API Access",content:"A suite of API endpoints that will save you hours of development and complex calculations." , main:"Advanced API" , link:"https://docs.numia.xyz/overview/advance-api-access"}];

    const product__content = product.map((elm)=>{
        return <ProductCard image={elm.image} heading={elm.heading} content={elm.content} redirect={elm.redirect} main={elm.main} />
    })
    const sub__product__content = product.map((elm)=>{
        return <SubProductCard image={elm.image} heading={elm.heading} content={elm.content} redirect={elm.redirect} main={elm.main} link={elm.link} />
    })

    const smallCard = [{ heading:"App Chains",content:"Extend your chain functionality with powerful Analytics and reliable APIs" },{ heading:"Wallets",content:"Forget about managing your own infrastructure and focus on building a great wallet experience." },{ heading:"Validators",content:"Measure delegator loyalty and build tools to engage with them." },{ heading:"Analysts",content:"Dive deep into Cosmos on-chain data and run complex analysis." },{ heading:"MEV",content:"Access on-chain data and necessary infrastructure." },{ heading:"Smart Contracts ",content:"Obtain on-chain data and get custom endpoints for your smart contract." },{ heading:"Defi Apps",content:"Forget about complex RPC queries and request all data from one single platform." },{ heading:"IBC Apps",content:"The most comprehensive data set for IBC chains and scalable IBC infrastructure." }];

    const smallCard__content = smallCard.map((elm)=>{
        return <SmallCard content={elm.content} heading={elm.heading} />
    })
  return (
    <div>
        
        <div className='main__container'>
            <div className='products flex flex-col'><div className='m-auto'><h1 className='mx-auto mb-12 text-4xl font-bold'>Products</h1></div><div className='flex gap-x-4 pc'>{product__content}</div>
            <div className='flex gap-x-4 psc'>{sub__product__content}</div>
             <div className='mline'></div> </div>
            <div className='flex flex-col'><div className='rm m-auto'><h1 className='text-3xl font-bold mb-6'>Built for all types of projects</h1></div> <div className='flex flex-wrap gap-x-1'>{smallCard__content}</div> <div className='mline'></div> </div>
            <div className='flex flex-col'><div className='flex flex-col'><h1 className='text-2xl font-bold m-auto mb-2'>Cosmos Chains we support</h1><span className='m-auto text-lg mb-6 text-gray-400'>More Coming Soon</span></div> <img className='mt-6 ' src='https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e6f0c3546c2ca071022ce_support-chains.png'></img> </div> 
        </div>


    </div>
  )
}

export default maincontainer
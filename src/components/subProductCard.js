import "./maincontainer.css";
export default function subProductCard(props){
    return(
        <div className="sub__product__container">

<div className="flex flex-col allcontainer gap-y-3 ">
        <div className="heading">{props.heading}</div>
        <div className="content">{props.content}</div>
        <div className="flex flex-col w-fit hvrr">
        <div className="redirect flex w-fit justify-center items-center gap-x-4" onClick={()=>{
            window.location.href=props.link;
        }} >{props.redirect} <i  class="fa-solid fa-right-long"></i></div>
        
        <div className="line" style={{width : '100%', backgroundColor: '#ff934e' , height : '1px'}}></div>
        </div>
        </div>

        </div>

       
    )
}
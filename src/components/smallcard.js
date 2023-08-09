import "./maincontainer.css"
export default function smallCard(props){

return(
    <div className="smcard ">
        <div className="smheading">{props.heading}</div>
        <div className="smcontent">{props.content}</div>
    </div>
)


}
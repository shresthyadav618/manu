
import "./maincontainer"
export default function ProductCard(props){

return (
    <div className="flex flex-col">
        <div className="flex flex-col gray">
            <div>{props.main}</div>
        <img src={props.image} alt="not found"></img>
        </div>
       
    </div>
)

}
import React from  "react" ;
import {useState} from  "react";
function Card (props) {

const [showCard , setShowCard] = useState(false);
function handleClick () {
setShowCard(!showCard);

}


return (
<div className="cardStyle" onClick={handleClick} 
 style={{ backgroundColor : showCard ? "" : "white" ,
 transition: "background-color 0.3s ease-in-out" ,
}} >


{showCard ? 
 <div><h3>{props.cardName}</h3> <p><img src={props.image} ></img></p>  </div>: <div><p> </p> </div>}

</div>

) ;


}  
export default Card ; 
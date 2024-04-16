import React from  "react" ;
import {useState} from  "react";
import { Outlet } from "react-router-dom";
function Card (props) {

// const [hiddenCard , setHiddenCard] = useState[false];
const [showCard , setShowCard] = useState(false);


async function handleClick () {

setShowCard(!showCard);
const audioplay = new Audio(props.audio);
    audioplay.play();

    const response  = await fetch("/api/draw-card" ,  {
     method : "POST" ,
     headers: {
        "Content-Type" : "application/json" }  ,
        body : JSON.stringify( {cardName: props.cardName }),
     });

     const data = await response.json();
    
    if (data.gameOver) {
        alert("Game Over !");
        window.location.reload();
    } else {
        if (props.cardName === "Yay ! Cat Card " || props.cardName === "Defused") {
            setTimeout(()=>{
                setShowCard(false);
            } , 2000);
        }
    }

}


return (
    <>
    <Outlet />
<div className="cardStyle" onClick={handleClick} 

 style={{ backgroundColor : showCard ? "" : "white" ,
 transition: "background-color 0.3s ease-in-out" ,
}} >


{showCard ? 
 <div><h3>{props.cardName}</h3> <p><img src={props.image} ></img></p>  </div>: <div><p> </p> </div>}

</div>
</>

) ;


}  
export default Card ; 
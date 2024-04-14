import React from "react" ;
import Card from "./Card";
import {Outlet} from "react-router-dom"
function Game() {
const cards = [
{ cardName : "Yay ! Cat Card " , image : "shield-cat-solid.svg"  } ,
{cardName : "Defused " , image : "face-smile-wink-solid.svg" } ,
{cardName : "Shuffling",
image : "shuffle-solid.svg" } ,

{cardName : "Oops Bomb" , 
image : "bomb-solid.svg" }

] ;




// for shuffled Cards everytime 
function shuffle(cards){

const shuffledArray = [...cards] ;


for( let i = 0 ; i <shuffledArray.length ; i ++){

    const j = Math.floor(Math.random()* shuffledArray.length); 
   [shuffledArray[i] , shuffledArray[j]] = [shuffledArray[j] , shuffledArray[i]] ;


}
return shuffledArray;
}

//creating new shuffled Array 

const newCardsArray = shuffle(cards);

// function handleClick(cards) {
//   for(let i = 0 ; i <cards.length ; i++){
//      if(cards[i])
//   }    
// }

//return cards to display 

return (

<div className="GameInterfaceStyle">
<Outlet />
{newCardsArray.map((cards)=>{
return (
<Card
// onClick = {handleClick}
cardName = {cards.cardName}
image = {cards.image}
 />
);

}
) 

}

</div>

) ;


}

export default Game ; 


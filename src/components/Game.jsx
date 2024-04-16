import React from "react" ;
import Card from "./Card";
import {Outlet} from "react-router-dom"
function Game() {
const cards = [
{ cardName : "Yay ! Cat Card " , image : "shield-cat-solid.svg"  , audio : "cat-card.mp3.mp3" } ,
{cardName : "Defused " , image : "face-smile-wink-solid.svg" , audio : "defuse.mp3.mp3"} ,
{cardName : "Shuffling", image : "shuffle-solid.svg" , audio : "card-shuffle.mp3.mp3" } ,

{cardName : "Oops Bomb" , image : "bomb-solid.svg" , audio : "bomb-card.mp3.mp3"},
{cardName : "Defused " , image : "face-smile-wink-solid.svg" , audio : "defuse.mp3.mp3"} ,
{cardName : "Defused " , image : "face-smile-wink-solid.svg" , audio : "defuse.mp3.mp3"} ,
{ cardName : "Yay ! Cat Card " , image : "shield-cat-solid.svg"  , audio : "cat-card.mp3.mp3" } ,



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

const fourCardsArray = newCardsArray.slice(0, 5);


//return cards to display 

return (

<div className="GameInterfaceStyle">
<Outlet />
{fourCardsArray.map((cards)=>{
return (
  <Card
    cardName = {cards.cardName}
    image = {cards.image}
    audio = {cards.audio}

 />
);}) 

}

</div>

) ;


}

export default Game ; 


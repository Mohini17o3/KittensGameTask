// we need to keep shuffling the cards 
// define id for each card
// map them , create random sequence and show the cards ?? 
// for each card , we need to add some animation as well , like on click the opacity changes 

import React from "react" ;
import { Link } from "react-router-dom";
function Navbar (){
    return (
 <div className="navbar">
  <Link to ={"/"}>Home</Link> 
  <Link to = "/rules"> Rules</Link>
  <Link to= "/LeaderBoard"> LeaderBoard</Link>
 </div>

    );
}

export default Navbar;


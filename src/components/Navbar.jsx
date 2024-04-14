// we need to keep shuffling the cards 
// define id for each card
// map them , create random sequence and show the cards ?? 
// for each card , we need to add some animation as well , like on click the opacity changes 

import React from "react" ;
import { Link } from "react-router-dom";
import {useLocation } from  "react-router-dom" ;  

function Navbar (){
    const location = useLocation();

    return (
 <div className="navbar">
  <Link to ={"/"}>Home</Link> 
  <Link to = {"/rules"}> Rules</Link>

  {(location.pathname === "/") ?   <Link to= {"/LeaderBoard" } > LeaderBoard</Link> :  <Link to= {"/submit/LeaderBoard" } > LeaderBoard</Link> 
} 
 </div>

    );
}

export default Navbar;


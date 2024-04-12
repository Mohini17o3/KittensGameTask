import React, { useState } from "react" ;
import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom" ;


function LoginForm() {
    const [checkInput , setCheckInput] = useState("");

function handleClick(event){
console.log(event.target.value);
setCheckInput (event.target.value);

}

return (
    <>
<Outlet />  
<div className="loginForm">
<form >
<label htmlFor= "username"> Username : </label> 
<input onClick = {handleClick} type = "text" id="username" placeholder="Enter a username" /> 

<Link to = {`/submit`} ><button>  Start !!</button> </Link> 

</form> 

</div>
</>
) ;     

}
export default LoginForm;


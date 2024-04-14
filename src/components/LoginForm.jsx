import React, { useState } from "react" ;
import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom" ;


function LoginForm() {
 const [checkInput , setCheckInput] = useState("");

function handleClick(event){

setCheckInput (event.target.value);

}


return (
    <>
<Outlet />  
<div className="loginForm">
<form >
<label htmlFor= "username"> Username : </label> 
<input onChange = {handleClick} type = "text" id="username" placeholder="Enter a username" /> 
{
    (checkInput != "" ) ? (
    <Link to = {`/submit`} ><button>  Start !!</button> </Link> ) : <button disabled >  Start !!</button> 

}
 

</form> 

</div>
</>
) ;     

}
export default LoginForm;


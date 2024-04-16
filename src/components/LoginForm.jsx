import React, { useState } from "react" ;
import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom" ;


function LoginForm() {

const [isUsernameEntered , setIsUsernameEntered] = useState(false);

 const [checkInput , setCheckInput] = useState("");

function handleClick(event){

setCheckInput (event.target.value);
setIsUsernameEntered(event.target.value !== "");

}
async function handleSubmit(event){
    event.preventDefault();
try {
    const response = await axios.post("/api/user" , {username}) ;
    
}catch (error) {
    console.log("error creating user " , error) ;
}
}


return (
    <>
<Outlet />  
<div className="loginForm">
<form onSubmit = {handleSubmit} >
<label htmlFor= "username"> Username : </label> 
<input onChange = {handleClick} type = "text" id="username" placeholder="Enter a username"

 /> 
{
    (checkInput != "" ) ? (
    <Link to = {`/submit`} ><button type="submit">  Start !!</button> </Link> ) : <button disabled >  Start !!</button> 

}
 

</form> 

</div>
</>
) ;     

}
export default LoginForm;


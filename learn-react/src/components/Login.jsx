import { useState } from "react";

function Login(props){
let name = "Balu"
console.log(props)
console.log(props.m)

const [isLoggedin,setIsLoggedin] = useState(false)
let isAdmin  = false
const handleClick = ()=>{
setIsLoggedin(true)

}
    return(
        <div className="login">

{
    isLoggedin ?
    <div className="">
s
        <h1>welcome to home</h1><h1>haii</h1> 
    </div> 
    : <h1>please login</h1>
}
<button onClick={handleClick}>Login</button>
{
   isAdmin  &&  <p>you are  admin</p>

}
{
    isAdmin || isLoggedin  ? <> true</> : <> both false</>
}

        </div>
    )
}

export default Login;

{/*   
            <div className="l" style={{color:"red", background:'#fff'}}>
                <p>{name }</p>
                <p>{props.m}</p>
                <p>{props.arr}</p>
              
            </div> */}
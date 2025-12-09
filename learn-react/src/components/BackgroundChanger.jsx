import { useState } from "react";

const  BackgroundChanger = () =>{
    const [background,setbackground]=useState("black")
   const  handleChanger=()=>{
setbackground("white")
     }

    return (
        <div className="backgroundChanger" style={{background:background}} >
<h1 style={{color:"black"}}>hello </h1>
<button onClick={handleChanger} > Color changer</button>
        </div>
    )
}
export default BackgroundChanger;
import { useState } from "react";
import PropChild from "./PropChild";

const  PropParent = () =>{
let count  = 1
    return (
        <div className="PropParent"  >
<PropChild count1 = {count}/>
        </div>
    )
}
export default PropParent;
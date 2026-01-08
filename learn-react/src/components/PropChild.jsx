import { useState } from "react";
import BackgroundChanger from "./BackgroundChanger";

const  PropChild = ({count,Background}) =>{

    return (
        <div className="PropChild"  >
          {count}
          {count}
          <button onClick={()=>setCount(count+2)}>child button</button>
        </div>
    )
}
export default PropChild;
//property = object
// props = {
//   count,
//   BackgroundChanger..
// }
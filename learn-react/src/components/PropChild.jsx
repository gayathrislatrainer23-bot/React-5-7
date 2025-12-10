import { useState } from "react";

const  PropChild = ({count1, count,setCount}) =>{

    return (
        <div className="PropChild"  >
          {count1}
          {count}
          <button onClick={()=>setCount(count+2)}>child button</button>
        </div>
    )
}
export default PropChild;
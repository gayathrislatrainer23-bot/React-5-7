import { useState } from "react"
import PropChild from "../PropChild"

function Counter(){
    const [count, setCount] = useState(0)
    // let h = 10
    const increment = ()=>{
        if(count>= 10){
            setCount(count)  
        }else{

            setCount( count+1)
        }
    }
    const decrement = ()=>{
       setCount( count-1)
    }
    const reset = ()=>{
       setCount(0)
    }
    return(
        <div className="counter" >
            <h1>Hello counter</h1>
            {/* <h1>{count}</h1> */}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <PropChild count = {count} setCount={setCount} />
        </div>
    )
    
    
}
export default Counter
// export {increment} 

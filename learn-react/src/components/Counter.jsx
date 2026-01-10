import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";


const Counter = ()=>{
const count = useSelector((state)=>state.counter.value)
const dispatch =useDispatch()
    const handleIncrement =()=>{
     dispatch(increment())
    }
return(
    <div className="counter">
        <p>count: {count} </p>
        <button onClick={handleIncrement}>Increment</button>
        {/* <button onClick={}>Decrement</button> */}
        {/* <button onClick={}>Reset</button> */}
    </div>
)
}
export default Counter;
import { useEffect } from "react"
import Fruits from "./Fruits"
import StudentList from "./StudentsList"

const ChidNew = ()=>{
    useEffect(()=>{
    
     console.log('haii child new')
    },[])
    return(
        <div className="ChidNew ">
            <h1>C</h1>
          
        </div>
    )
}
export default ChidNew 
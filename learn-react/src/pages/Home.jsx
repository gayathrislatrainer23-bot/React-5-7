import ChidNew from "../components/ChildNew"
import Fruits from "../components/Fruits"
import StudentList from "../components/StudentsList"
import {useNavigate} from 'react-router-dom'
const Home = ()=>{
    const navigate = useNavigate()
    return(
        <div className="home">
                <button onClick={()=> navigate(-1)}>back</button>
                <button onClick={()=> navigate(+1)}>next</button>
            <h1>HOME</h1>
            <StudentList/>
            {/* <Fruits/> */}
            <ChidNew/>

        </div>
    )
}
export default Home
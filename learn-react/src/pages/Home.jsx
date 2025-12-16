import ChidNew from "../components/ChildNew"
import Fruits from "../components/Fruits"
import StudentList from "../components/StudentsList"

const Home = ()=>{
    return(
        <div className="home">
            <h1>HOME</h1>
            <StudentList/>
            {/* <Fruits/> */}
            <ChidNew/>

        </div>
    )
}
export default Home
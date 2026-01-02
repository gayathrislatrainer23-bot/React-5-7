
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import Counter from  './components/counter/Counter'
import Fruits from './components/Fruits'
import Login from './components/Login'
import LoginForm from './components/LoginForm'
import PropParent from './components/PropParent'
import StudentList from './components/StudentsList'
import {BrowserRouter, Link, Route, Routes,} from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import Home from './pages/Home'
import Effect from './components/Effect'
import NoteFound from './pages/NotFound'
import MaterialUI from './components/MaterialUI'
import Tailwindcss from './components/Tailwindcss'

function App() {
  let mark = 35
  let arr = [2,4,5,'jgh']
  return (
    <>
    
<BrowserRouter>
<nav>
<Link to= {'/home'}>HOME</Link>
<br />
<Link to= {'/admin'}>DashBoard</Link>
</nav>
<Routes>
  <Route path="/home"  element= {<Home/>} />
  <Route path="/materialUI"  element= {<MaterialUI/>} />
  <Route path="/admin"  element= {<AdminDashboard/>} />
  <Route path="/login"  element= {<LoginForm/>} />
  <Route path="/effect"  element= {<Effect/>} />
  <Route path="/Counter"  element= {<Counter/>} />
  <Route path="/tail"  element= {<Tailwindcss/>} />
  <Route path="/*"  element= {<NoteFound/>} />
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
 {/* <Login m={mark} arr= {arr} /> */}
{/* <Fruits/>
<Counter/> 

<BackgroundChanger/> */}
{/* <StudentList/> */}
{/* <Fruits/> */}
{/* <PropParent/>
<Counter/>  */}
{/* <LoginForm/> */}
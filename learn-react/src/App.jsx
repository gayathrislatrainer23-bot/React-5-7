
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import Counter from './components/Counter'
import Fruits from './components/Fruits'
import Login from './components/Login'


function App() {
  let mark = 35
  let arr = [2,4,5,'jgh']
  return (
    <>
 <Login m={mark} arr= {arr} />
{/* <Fruits/>
<Counter/> 
<BackgroundChanger/> */}
    </>
  )
}

export default App

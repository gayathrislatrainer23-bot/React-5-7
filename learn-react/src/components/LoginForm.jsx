import { useState } from "react"

import {useNavigate} from 'react-router-dom'
const LoginForm = ()=>{
    const [email, setEmail] = useState('')
    // const [status, setStatus] = useState(false)
const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
status= true;
        // console.log(e)
        //   console.log(e.target.elements.email.value)   
        // data send to db
        // res success
if(status){

    navigate('/home')
}
//  alert(email)
    }
const handleEmailChange = (e)=>{

      setEmail(e.target.value)

}

    return(
   <div className="loginform">
    {/* <button onClick={()=> navigate(-1)}>back</button> */}
   <form action="" onSubmit={handleSubmit}>
    <input type="email"  placeholder="enter email" name='email'  value={email} onChange={handleEmailChange} />
    {/* <input type="password" placeholder="password" /> */}
    <button type="submit">Login Button</button>
   </form>
   <div className="enteredValue">
    <h1>email: {email}</h1>
   </div>
    </div>
    )
}
export default LoginForm;
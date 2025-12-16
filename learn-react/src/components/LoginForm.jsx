import { useState } from "react"

const LoginForm = ()=>{
    const [email, setEmail] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
          console.log(e.target.elements.email.value)   
//  alert(email)
    }
const handleEmailChange = (e)=>{

      setEmail(e.target.value)

}

    return(
   <div className="loginform">
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
function Login(props){
let name = "Balu"
console.log(props)
console.log(props.m)
    return(
        <div className="login">
  
            <div className="l" style={{color:"red", background:'#fff'}}>
                <p>{name }</p>
                <p>{props.m}</p>
                <p>{props.arr}</p>
                <p></p>
            </div>
        </div>
    )
}

export default Login;
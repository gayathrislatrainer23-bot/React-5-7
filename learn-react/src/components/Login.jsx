function Login(x){
let name = "Balu"
console.log(x)
console.log(x.m)
    return(
        <div className="login">
  
            <div className="l" style={{color:"red", background:'#fff'}}>
                <p>{name }</p>
                <p>{x.m}</p>
                <p>{x.arr}</p>
                <p></p>
            </div>
        </div>
    )
}

export default Login;
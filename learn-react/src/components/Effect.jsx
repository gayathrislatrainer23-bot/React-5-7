import { useEffect, useState } from "react";
const Effect = ()=>{
const [msg,SetMsg]= useState('no msg')
let num = 14
useEffect(()=>{
     console.log(' it is a sideeffect for all render')

})
useEffect(()=>{

 console.log('it show initiaLY ONLY')
},[])
useEffect(()=>{
    console.log(' it is a sideeffect of message change')

},[msg])

    return(
    <>
<p>side effect</p>
{msg}
<button onClick={()=> SetMsg('message show')}>message</button>
    </>
    )
}
export default Effect;

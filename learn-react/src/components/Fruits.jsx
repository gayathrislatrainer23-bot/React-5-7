function Fruits (){
    let fruits = [
    {name: 'apple',
        price: 200,

    },{
        name:"mango",
        price : 300

    }]
    return(
        <div>
{
    fruits.map ((fruit, i)=>(
        <div className="">

            <li key={fruit.name}>{fruit.name}</li>
            <li key={fruit.price}> {fruit.price}</li>
        
        </div>
    )
    )
}
        </div>
    )
}

export default Fruits
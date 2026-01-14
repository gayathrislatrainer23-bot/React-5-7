import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  let handleinput = (e) => {
    setInput(e.target.value);
  };
  let handleAdd = (e) => {
   
     setTodos([...todos ,input]);
 
  };
  const handleDelete = (i)=>{
console.log(i)
const updatedValue = todos.filter((todo)=>todos[i] !== todo)

setTodos(updatedValue)
}
//   const addTodo = (input) => {
// const updatedTodos = [...todos]; // copy first
// updatedTodos.push(input);      // mutate the copy
// setTodos(updatedTodos);

//   };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="array"
        placeholder="To Do"
        value={input}
        onChange={handleinput}
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        { 
  todos.length !==0 &&      todos.map((todo,i)=>(
<li key={i}>{todo} <button onClick={()=>handleDelete(i)}>delete</button></li>
        ))
        }
      </div>
    </div>
  );
}
export default ToDoList;
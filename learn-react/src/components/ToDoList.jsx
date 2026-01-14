import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  let handleinput = (e) => {
    setInput(e.target.value);
  };
  let handleAdd = (e) => {
   
     setTodos([...todos ,input]);
    // setTodos((todos)=> todos.push(input))
    // setTodos(todos.push(input))
    //    console.log(todos);
  };
  
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
      {todos[0]}
      {/* <div>
        { 
  todos.length !==0 &&      todos.map((todo,i)=>(
<li key={i}>{todo}</li>
        ))
        }
      </div> */}
    </div>
  );
}
export default ToDoList;
// import React, { useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState(["Hello","Niggers"]); // initialize with an empty array
//   const [inputValue, setInputValue] = useState(''); // initialize with an empty string

//   const addTodo = () => {
//     if (inputValue.trim()) {  //if the input is not empty
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//     else{
//       alert("Please enter a valid task Nigger!!")
//     }
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={(e) => setInputValue(e.target.value)} 
//         placeholder="Add a new task"
//       />
//       <button onClick={addTodo}>Add</button>
//       <button onClick={() => setTodos([])}>clear</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

import { useState } from "react";
import React from 'react'

const TodoList = () => {

  // Use State to store the tasks
  const [Todos, SetTodos] = useState([]);
  const [Input, SetInput] = useState("");

  const handleAddTask = () => {
    if (Input.trim()) {

      SetTodos([...Todos, Input]);
      SetInput("");  // Clear the input field
    }else{
      alert("Please enter a valid task Idiot!!");
    }
  };


  return (
    <div>
      <h1>ToDoList</h1>
      <span>Small TodoList app</span>

      <div>
        <input 
          type="text" 
          value={Input} 
          onChange={(e) => SetInput(e.target.value)} 
        />
        <button  onClick={handleAddTask}>Add</button>
        <button onClick={() => SetTodos([])}>Clear</button>
      </div>

      <ol>
        {Todos.map((todo, index) => (
          <li key={index}>{todo} <button onClick={() => SetTodos(Todos.filter((_,i)=> { return i !== index}))}>delete</button></li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;

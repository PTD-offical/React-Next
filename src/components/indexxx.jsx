import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // initialize with an empty array
  const [inputValue, setInputValue] = useState(''); // initialize with an empty string

  const addTodo = () => {
    if (inputValue.trim()) {  //if the input is not empty
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
    else{
      alert("Please enter a valid task Nigger!!")
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={() => setTodos([])}>clear</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

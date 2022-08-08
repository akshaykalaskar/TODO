import React, { useState, useRef } from 'react';
import Todos from './Todos';
import './style.css';

export default function App() {
  const inputRef = useRef(null);
  const [task, setTask] = useState([]);

  const addTask = () => {
    let temp = [...task, inputRef.current.value];
    setTask(temp);
  };
  const removeTask = (key) => {
    console.log(key);
  };
  return (
    <div>
      <h1>To DO</h1>
      <input type="text" placeholder="Enter task" ref={inputRef} />
      <button type="button" onClick={addTask}>
        Add
      </button>{' '}
      <h2>All Task</h2>
      <ul>
        {task &&
          task.map((task, index) => (
            <Todos task={task} key={index} removeTask={removeTask} />
          ))}
      </ul>
    </div>
  );
}

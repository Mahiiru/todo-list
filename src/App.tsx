import React from 'react';
import './App.css';
import { TasksList } from './components/TasksList';


function App() {
  



  return (
    <div className="App">
      <div className="todo-list-main">
        <h1>Todo-List</h1>
        <TasksList></TasksList>
      </div>
    </div>
  );
}

export default App;

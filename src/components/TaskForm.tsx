import React from 'react';
import '../stylesheets/TaskForm.css';


export function TaskForm(){
    return (
        <form className="task-form">
            <input className="task-input" type="text" placeholder="Write your task" name="text"/>
            <button className="task-button">Add task</button>
        </form>    
    );
}
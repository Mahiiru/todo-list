import React from 'react';
import { Task } from './Task';
import { TaskForm } from './TaskForm';
import { TaskProps } from './TaskProps';
import '../stylesheets/TasksList.css';


export function TasksList() {

    const taskTest:TaskProps = {id:1,text:"Task 1 test",completed:false};

    return (
        <>
            <TaskForm></TaskForm>
            <div className="tasks-list-container">
                <Task {...taskTest}></Task>
            </div>
        </>
    );
}
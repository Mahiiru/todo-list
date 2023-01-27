import React, { useState } from 'react';
import { Task } from './Task';
import { TaskForm } from './TaskForm';
import { TaskProps, TaskPropsWithFunctions } from './TaskProps';
import '../stylesheets/TasksList.css';


export function TasksList() {

    const [tasks,setTasks] = useState<TaskProps[]>([]);


    const completeTask = (task:TaskProps) => {
        const refreshTasks = tasks.map((tsk) => {
            if(tsk.id === task.id){
                tsk.completed = !tsk.completed;
            }
            return tsk;
        });
        setTasks(refreshTasks);
    }

    const deleteTask= (task:TaskProps):void =>{
        const refreshTasks = tasks.filter((tsk) => tsk.id !== task.id);
        setTasks(refreshTasks);
    }

    const addTask= (textTask:string) => {
        if(textTask.trim()){
            textTask = textTask.trim();
            const task:TaskProps = {id:Math.random()*1000,text:textTask,completed:false}
            const refreshTasks = [task,...tasks];
            setTasks(refreshTasks);
        }
    }

    return (
        <>
            <TaskForm  onSubmit={addTask}></TaskForm>
            <div className="tasks-list-container">
                {
                    tasks.map((task) =>{
                        const taskWithFun:TaskPropsWithFunctions = {id:task.id,text:task.text,completed:task.completed,completeTask:completeTask,deleteTask:deleteTask}
                        return <Task key={taskWithFun.id} {...taskWithFun}></Task>
                    })
                }
            </div>
        </>
    );
}
import React, { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { TaskProps } from './TaskProps';


export function TaskForm(props: { onSubmit: (arg0: string) => void; }){

    const [input,setInput] = useState<string>("");


    const handlerChange = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
        setInput(inputEvent.target.value);
    }

    const handlerShipment = (formEvent: React.ChangeEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        props.onSubmit(input);
    }


    return (
        <form className="task-form" onSubmit={handlerShipment}>
            <input className="task-input" type="text" placeholder="Write your task" name="text"  onChange={handlerChange}/>
            <button className="task-button">Add task</button>
        </form>    
    );
}
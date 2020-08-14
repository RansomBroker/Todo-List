import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
    const {addTask, clearTasksList, editItem, editTask} = useContext(TaskListContext)
    const [taskTitle, setTaskTitle] = useState("")


    const handleChange = (event) =>{
        const {value} = event.target
        setTaskTitle(value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!editItem){
            addTask(taskTitle);
            setTaskTitle("");  
        }else{
            editTask(editItem.id, taskTitle)
        }
        
    }

    useEffect(() =>{
        if(editItem){
            setTaskTitle(editItem.taskTitle)
            console.log(editItem);
        }else {
            setTaskTitle("");
        }
    }, [editItem]);


    return (
        <form onSubmit={handleSubmit} className="form">
             <input
                type="text"
                className="task-input col-10   "
                placeholder="Add Task..."
                required
                onChange={handleChange}
                value={taskTitle}
             />
             <div className="buttons">
                <button type="submit" className="btn add-task-btn">{editItem ? 'Edit Task' : 'Add'}</button>
                <button onClick={clearTasksList} className="btn clear-task-btn">Clear</button>
             </div>
        </form>
    )
}

export default TaskForm;

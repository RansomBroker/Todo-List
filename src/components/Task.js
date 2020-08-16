import React, {useContext, useState} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext);
    const [check, setCheck] = useState(false)

    const handleChange= e =>{
        setCheck(true)
    }

    return (
        <div className="task">
            <div>
                <input type="checkbox" onChange={handleChange} disabled={check} value={task.id}/>
                <span>{task.taskTitle}</span>
            </div>
            <div>
                <button onClick={() => removeTask(task.id)} className="task-btn btn-danger btn-delete">
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button onClick={() => findItem(task.id)} className="task-btn btn-edit">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </div>
    )
}

export default Task

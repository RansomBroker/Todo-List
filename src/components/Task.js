import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext);

    return (
        <div className="task">
            <span>{task.taskTitle}</span>
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

import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext)

    return (
        <div>
            {tasks.length ? (
                <div className="task-list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id}/>
                    })}
                </div>
            ): (
                <div className="no-task">No Task Active</div>
            )}
        </div>
    )
}

export default TaskList;

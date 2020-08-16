import React, {createContext, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext({tasks:[]});

const TaskListContextProvider = (props) =>{
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState);

    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = taskTitle => {
        setTasks([...tasks, {taskTitle, id: uuidv4()}])
    }

    const removeTask = id =>{
        setTasks(tasks.filter(task => task.id !== id ));
    }

    const clearTasksList = () =>{
        setTasks([])
    }

    const findItem = id =>{
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    const editTask = (id, taskTitle) => {
        const newTask = tasks.map(task => (task.id === id)? {id, taskTitle} : task )
        setTasks(newTask)
        setEditItem(null)
    }

    return(
        <TaskListContext.Provider value={
                {   tasks, 
                    addTask, 
                    removeTask, 
                    clearTasksList, 
                    findItem, 
                    editTask, 
                    editItem,
                }
            }>
            {props.children}
        </TaskListContext.Provider>
    );
}


export default TaskListContextProvider;
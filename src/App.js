import React from 'react';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './App.css';


const App = () => {
  return (
        <div className="container">
            
            <div className="flex-container justify-content-center align-items-center col-12 bg-white-5">
                <div className="card col-8 border shadow">
                    <div className="card-body">
                        <Header/>
                            <TaskListContextProvider>
                            <TaskForm/>
                            <TaskList/>                  
                            </TaskListContextProvider>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default App;

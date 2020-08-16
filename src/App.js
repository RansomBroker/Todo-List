import React from 'react';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
        <div className="container">
            <TaskListContextProvider>
                <div className="flex-container justify-content-center align-items-center col-12 bg-white-5">
                    <div className="card col-8 border shadow">
                        <div className="card-body">
                            <Header/>
                            <TaskForm/>
                            <TaskList/>
                        </div>
                        <div className="card-footer">
                            <Footer/>         
                        </div>
                    </div>
                </div>
            </TaskListContextProvider>            
        </div>
  )
}


export default App;

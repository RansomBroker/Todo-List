import React from 'react'
import TaskList from './TaskList';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <button className="btn-footer btn-find"><i className="fas fa-search"></i></button>
                <button onClick={() => <TaskList/>} className="btn-footer btn-current-task">Current Task</button>
                <button className="btn-footer btn-task-complete">Complete</button>
            </div>
        </footer>
    )
}

export default Footer;



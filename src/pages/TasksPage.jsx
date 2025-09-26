import React from 'react';
import Sidebar from '../components/Sidebar';
import './TasksPage.css';

const TasksPage = () => {
    return (
        <div className="page-container">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">Task & Workflow</h1>
                <div className="task-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Prepare Client Report</td>
                                <td>Aug 20</td>
                                <td><span className="status-in-progress">In Progress</span></td>
                                <td><button className="action-button">Request Extension</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TasksPage;
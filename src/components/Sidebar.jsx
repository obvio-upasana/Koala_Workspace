import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    const isLinkActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Koala Workspace</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className={isLinkActive('/dashboard')}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className={isLinkActive('/tasks')}>
                        <Link to="/tasks">Task & Workflow</Link>
                    </li>
                    <li className={isLinkActive('/clients')}>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li className={isLinkActive('/reports')}>
                        <Link to="/reports">Reports</Link>
                    </li>
                    
                    <li className={isLinkActive('/settings')}>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
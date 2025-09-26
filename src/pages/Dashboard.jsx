import React from 'react';
import Sidebar from '../components/Sidebar';
import TaskWidget from '../components/TaskWidget';
import AnnouncementWidget from '../components/AnnouncementWidget';
import CalendarWidget from '../components/CalendarWidget';
import ShiftInfoWidget from '../components/ShiftInfoWidget';
import ProfileWidget from '../components/ProfileWidget';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">Dashboard</h1>
                <div className="dashboard-grid">
                    <TaskWidget />
                    <AnnouncementWidget />
                    <CalendarWidget />
                    <ShiftInfoWidget />
                    <ProfileWidget />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
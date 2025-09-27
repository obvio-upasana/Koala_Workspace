import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TaskWidget from '../components/TaskWidget';
import AnnouncementWidget from '../components/AnnouncementWidget';
import ShiftInfoWidget from '../components/ShiftInfoWidget';
import ProfileWidget from '../components/ProfileWidget';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Dashboard.css';

const Dashboard = () => {
    const [events] = useState([
        { title: 'Team Meeting', date: '2025-09-28' },
        { title: 'Client Call', date: '2025-09-29' },
        { title: 'Project Deadline', date: '2025-10-01' },
    ]);

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">Dashboard</h1>
                <div className="dashboard-grid">
                    <TaskWidget />
                    <AnnouncementWidget />
                    
                    {/* Replaced old CalendarWidget */}
                    <div className="calendar-widget">
                        <h3>Calendar</h3>
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            events={events}
                            height="auto"
                        />
                    </div>
                    
                    <ShiftInfoWidget />
                    <ProfileWidget />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

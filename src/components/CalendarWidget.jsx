import React from 'react';

const CalendarWidget = () => (
    <div className="widget calendar-widget">
        <h3>August 2025</h3>
        <div className="calendar-grid">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => <span key={day}>{day}</span>)}
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <div key={day} className={`calendar-day ${day === 8 ? 'current-day' : ''}`}>
                    {day}
                </div>
            ))}
        </div>
    </div>
);

export default CalendarWidget;
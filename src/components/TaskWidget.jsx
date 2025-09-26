import React from 'react';

const TaskWidget = () => (
    <div className="widget task-widget">
        <h3>Today's Task</h3>
        <ul>
            <li><input type="checkbox" /> Set up meeting rooms</li>
            <li><input type="checkbox" /> Check Projector</li>
            <li><input type="checkbox" /> Check common areas</li>
        </ul>
    </div>
);

export default TaskWidget;
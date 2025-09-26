import React from 'react';

const ShiftInfoWidget = () => (
    <div className="widget shift-info-widget">
        <h3>Shift Info</h3>
        <div className="shift-details">
            <div><h4>Current Shift</h4><p>9:00 am - 5:00 pm</p></div>
            <div><h4>Next Shift</h4><p>5:00 pm - 1:00 am</p></div>
        </div>
    </div>
);

export default ShiftInfoWidget;
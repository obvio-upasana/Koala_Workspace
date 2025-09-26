// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import './ReportsPage.css';

// const ReportsPage = () => {
//     return (
//         <div className="page-container">
//             <Sidebar />
//             <div className="main-content">
//                 <h1 className="page-title">Report</h1>
//                 <div className="reports-grid">
//                     <div className="timesheet-card">
//                         <h3>Timesheet</h3>
//                         <table>
//                             <tbody>
//                                 <tr><td>Date</td><td>Hours</td></tr>
//                                 <tr><td>Monday</td><td>8</td></tr>
//                                 <tr><td>Tuesday</td><td>8</td></tr>
//                                 <tr><td>Wednesday</td><td>8</td></tr>
//                                 <tr><td>Thursday</td><td>8</td></tr>
//                                 <tr><td>Friday</td><td>8</td></tr>
//                                 <tr><td>Saturday</td><td>8</td></tr>
//                                 <tr><td>Sunday</td><td>8</td></tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <div className="task-report-card">
//                         <h3>Task Report</h3>
//                         <div className="donut-chart-placeholder">
//                             {/* In a real app, this would be a chart library component */}
//                             <div className="chart-center-text">65%</div>
//                         </div>
//                         <ul className="chart-legend">
//                             <li><span className="dot completed"></span> Completed</li>
//                             <li><span className="dot in-progress"></span> In Progress</li>
//                             <li><span className="dot pending"></span> Pending</li>
//                         </ul>
//                     </div>
//                     <div className="weekly-summary-card">
//                         <h3>Weekly Summary</h3>
//                         <p className="hours-worked">Hours Worked: <span>40</span></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReportsPage;







import React from 'react';
import Sidebar from '../components/Sidebar';
import './ReportsPage.css';

const ReportsPage = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="main-content">
        <h1 className="page-title">Report</h1>

        <div className="reports-grid">
          <div className="timesheet-widget widget">
            <h3>Timesheet</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>8</td>
                  </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="task-report-widget widget">
            <h3>Task Report</h3>
            <div className="task-chart">
              <div className="circle-chart">
                <p>65%</p>
              </div>
              <div className="chart-legend">
                <p><span className="dot completed-dot"></span> Completed</p>
                <p><span className="dot in-progress-dot"></span> In Progress</p>
                <p><span className="dot pending-dot"></span> Pending</p>
              </div>
            </div>
          </div>

          <div className="weekly-summary-widget widget">
            <h3>Weekly Summary</h3>
            <p>Hours Worked: 40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
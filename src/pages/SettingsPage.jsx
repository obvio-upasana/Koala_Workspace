import React from 'react';
import Sidebar from '../components/Sidebar';
import './SettingsPage.css';

const SettingsPage = () => {
    return (
        <div className="page-container">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">System & Security</h1>
                <div className="settings-options">
                    <div className="setting-item">
                        <div className="icon-container"><i className="fas fa-lock"></i></div>
                        <div className="setting-text">
                            <h4>Secure Login</h4>
                            <p>Secure login (email/password, with 2FA if enabled)</p>
                        </div>
                        <div className="setting-actions">
                            <button className="update-button">Update Security Settings</button>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="icon-container"><i className="fas fa-universal-access"></i></div>
                        <div className="setting-text">
                            <h4>Accessibility</h4>
                            <p>Accessible on Desktop & Mobile browsers</p>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="icon-container"><i className="fas fa-wifi"></i></div>
                        <div className="setting-text">
                            <h4>Connectivity</h4>
                            <p>No Offline access</p>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="icon-container"><i className="fas fa-ban"></i></div>
                        <div className="setting-text">
                            <h4>Restrictions</h4>
                            <p>Define user access and permissions</p>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="icon-container"><i className="fas fa-headset"></i></div>
                        <div className="setting-text">
                            <h4>Contact Admin</h4>
                            <p>Contact a manager for support</p>
                        </div>
                        <div className="setting-actions">
                            <button className="contact-button">Contact Manager</button>
                        </div>
                    </div>
                    <div className="recent-activity-item">
                        <h4>Recent Login Activity</h4>
                        {/* Placeholder for recent login data */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
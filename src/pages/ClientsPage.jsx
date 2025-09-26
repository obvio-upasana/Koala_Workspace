// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import './ClientsPage.css';

// const ClientsPage = () => {
//     return (
//         <div className="page-container">
//             <Sidebar />
//             <div className="main-content">
//                 <h1 className="page-title">Clients & Workspace</h1>
//                 <div className="client-info-card">
//                     <h3>Client Name</h3>
//                     <p>Contact - 1234567890</p>
//                     <p>Email -</p>
//                     <p>Company Name -</p>
//                     <p>Address</p>
//                     <div className="notes-section">
//                         <div className="notes-tabs">
//                             <button className="tab-button active">Meeting Notes</button>
//                             <button className="tab-button">Documents</button>
//                         </div>
//                         <textarea placeholder="Log meeting notes..."></textarea>
//                     </div>
//                     <button className="save-button">Save</button>
//                 </div>
//                 <div className="booking-list">
//                     <h3>Today's Booking</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Task</th>
//                                 <th>Status</th>
//                                 <th>Notes</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Meeting with Mr. Smith</td>
//                                 <td>Confirmed</td>
//                                 <td>Need to prepare contract.</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ClientsPage;







import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './ClientsPage.css';

const ClientsPage = () => {
    // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('notes'); 
    // State to hold the content of the meeting notes
    const [meetingNotes, setMeetingNotes] = useState('');
    
    // Example data for a client. In a real app, this would come from an API.
    const client = {
        name: "Acme Corp",
        contact: "123-456-7890",
        email: "contact@acmecorp.com",
        company: "Acme Corp",
        address: "123 Business Lane, Cityville"
    };
    
    // Example booking data
    const bookings = [
        { task: "Meeting with Mr. Smith", status: "Confirmed", notes: "Need to prepare contract." },
        { task: "Facility Tour", status: "Pending", notes: "Awaiting confirmation from client." },
       
    ];

    // This function runs when the "Save Note" button is clicked
    const handleSaveNote = () => {
        // Here, you would typically send the 'meetingNotes' data to your backend API.
        // For now, we'll just show an alert to confirm it's working.
        if (meetingNotes.trim() !== '') {
            console.log("Saving the following note:", meetingNotes);
            alert("Note saved successfully!");
            setMeetingNotes(''); // Clear the textarea after saving
        } else {
            alert("Please enter a note before saving.");
        }
    };

    const renderTabContent = () => {
        if (activeTab === 'notes') {
            return (
                <div className="notes-content">
                    <textarea
                        placeholder="Log meeting notes..."
                        className="notes-textarea"
                        value={meetingNotes}
                        onChange={(e) => setMeetingNotes(e.target.value)}
                    ></textarea>
                    {/* The onClick event is now attached to the button */}
                    <button className="save-button" onClick={handleSaveNote}>Save Note</button>
                </div>
            );
        } else if (activeTab === 'documents') {
            return (
                <div className="documents-content">
                    <p>Upload new documents here.</p>
                    <button className="upload-button">Upload File</button>
                    {/* Add a list of uploaded documents here */}
                </div>
            );
        }
    };

    return (
        <div className="page-container">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">Clients & Workspace</h1>
                
                <div className="client-header-card widget">
                    <div className="client-info">
                        <h3>{client.name}</h3>
                        <p><strong>Contact:</strong> {client.contact}</p>
                        <p><strong>Email:</strong> {client.email}</p>
                        <p><strong>Company Name:</strong> {client.company}</p>
                        <p><strong>Address:</strong> {client.address}</p>
                    </div>
                </div>

                <div className="client-details-card widget">
                    <div className="tab-buttons">
                        <button 
                            className={`tab-button ${activeTab === 'notes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notes')}
                        >
                            Meeting Notes
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'documents' ? 'active' : ''}`}
                            onClick={() => setActiveTab('documents')}
                        >
                            Documents
                        </button>
                    </div>
                    {renderTabContent()}
                </div>

                <div className="booking-list widget">
                    <h3>Today's Booking</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>{booking.task}</td>
                                    <td>{booking.status}</td>
                                    <td>{booking.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;
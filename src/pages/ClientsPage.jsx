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
    const [activeTab, setActiveTab] = useState('notes');
    const [meetingNotes, setMeetingNotes] = useState('');
    const [lastNote, setLastNote] = useState('');
    
    const client = {
        name: "Acme Corp",
        contact: "123-456-7890",
        email: "contact@acmecorp.com",
        company: "Acme Corp",
        address: "123 Business Lane, Cityville"
    };
    
    const bookings = [
        { task: "Meeting with Mr. Smith", status: "Confirmed", notes: "Need to prepare contract." },
        { task: "Facility Tour", status: "Pending", notes: "Awaiting confirmation from client." },
    ];

    const documents = [
        { name: "Contract.pdf", url: "#" },
        { name: "Proposal.docx", url: "#" },
        { name: "Invoice.xlsx", url: "#" },
    ];

    const handleSaveNote = () => {
        if (meetingNotes.trim() !== '') {
            setLastNote(meetingNotes);
            setMeetingNotes('');
            alert("Note saved successfully!");
        } else {
            alert("Please enter a note before saving.");
        }
    };

    const renderTabContent = () => {
        if (activeTab === 'notes') {
            return (
                <div className="notes-section">
                    <div className="notes-editor">
                        <textarea
                            placeholder="Log meeting notes..."
                            className="notes-textarea"
                            value={meetingNotes}
                            onChange={(e) => setMeetingNotes(e.target.value)}
                        ></textarea>
                        <button className="save-button" onClick={handleSaveNote}>Save Note</button>
                    </div>
                    {lastNote && (
                        <div className="last-note">
                            <h4>Last Saved Note:</h4>
                            <p>{lastNote}</p>
                        </div>
                    )}
                </div>
            );
        } else if (activeTab === 'documents') {
            return (
                <div className="documents-list">
                    {documents.map((doc, idx) => (
                        <a key={idx} href={doc.url} className="document-link">{doc.name}</a>
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="page-container">
            <Sidebar />
            <div className="main-content">
                <h1 className="page-title">Clients & Workspace</h1>
                
                {/* Client Info Card with navigation arrows */}
                <div className="client-info-card widget">
                    <div className="client-header">
                        <h3>{client.name}</h3>
                        <div className="nav-arrows">
                            <button>{"<"}</button>
                            <button>{">"}</button>
                        </div>
                    </div>
                    <p><strong>Contact:</strong> {client.contact}</p>
                    <p><strong>Email:</strong> {client.email}</p>
                    <p><strong>Company Name:</strong> {client.company}</p>
                    <p><strong>Address:</strong> {client.address}</p>
                </div>

                {/* Notes / Documents Card */}
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

                {/* Booking Card */}
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

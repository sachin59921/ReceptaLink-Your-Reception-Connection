import React, { useState } from "react";

function AdminDashboard() {
  const [receptionists, setReceptionists] = useState([
    { id: 1, name: "Receptionist 1", email: "rec1@example.com" },
    { id: 2, name: "Receptionist 2", email: "rec2@example.com" },
    { id: 3, name: "Receptionist 3", email: "rec3@example.com" },
  ]);

  const [rooms, setRooms] = useState([
    { id: 1, name: "Room 101", capacity: 4 },
    { id: 2, name: "Room 102", capacity: 6 },
    { id: 3, name: "Room 103", capacity: 2 },
    { id: 4, name: "Room 104", capacity: 8 },
  ]);

  const [receptionReport] = useState([
    {
      visitorName: "John Doe",
      visitorEmail: "john@example.com",
      roomBooked: "Room 101",
      timeIn: "10:00 AM",
      timeOut: "12:00 PM",
      meetingStatus: "Completed",
    },
    {
      visitorName: "Jane Smith",
      visitorEmail: "jane@example.com",
      roomBooked: "Room 102",
      timeIn: "11:00 AM",
      timeOut: "1:00 PM",
      meetingStatus: "Completed",
    },
  ]);

  const addReceptionist = () => {
    const name = prompt("Enter receptionist name:");
    const email = prompt("Enter receptionist email:");
    if (name && email) {
      setReceptionists([...receptionists, { id: Date.now(), name, email }]);
    }
  };

  const removeReceptionist = (id) => {
    setReceptionists(receptionists.filter((rec) => rec.id !== id));
  };

  const addRoom = () => {
    const name = prompt("Enter room name:");
    const capacity = prompt("Enter room capacity:");
    if (name && capacity) {
      setRooms([...rooms, { id: Date.now(), name, capacity }]);
    }
  };

  const removeRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Receptionist Management */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Manage Receptionists</h2>
        <button
          onClick={addReceptionist}
          style={{
            padding: "10px 15px",
            marginBottom: "20px",
            backgroundColor: "#3D3BF3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Receptionist
        </button>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {receptionists.map((rec) => (
              <tr key={rec.id}>
                <td style={cellStyle}>{rec.name}</td>
                <td style={cellStyle}>{rec.email}</td>
                <td style={cellStyle}>
                  <button
                    onClick={() => removeReceptionist(rec.id)}
                    style={removeButtonStyle}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Meeting Room Management */}
      <section>
        <h2>Manage Meeting Rooms</h2>
        <button
          onClick={addRoom}
          style={{
            padding: "10px 15px",
            marginBottom: "20px",
            backgroundColor: "#3D3BF3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Room
        </button>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Capacity</th>
              <th style={cellStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td style={cellStyle}>{room.name}</td>
                <td style={cellStyle}>{room.capacity}</td>
                <td style={cellStyle}>
                  <button
                    onClick={() => removeRoom(room.id)}
                    style={removeButtonStyle}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Reception Dashboard Report */}
      <section style={{ marginTop: "30px" }}>
        <h2>Reception Dashboard Report</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Visitor Name</th>
              <th style={cellStyle}>Visitor Email</th>
              <th style={cellStyle}>Room Booked</th>
              <th style={cellStyle}>Time In</th>
              <th style={cellStyle}>Time Out</th>
              <th style={cellStyle}>Meeting Status</th>
            </tr>
          </thead>
          <tbody>
            {receptionReport.map((report, index) => (
              <tr key={index}>
                <td style={cellStyle}>{report.visitorName}</td>
                <td style={cellStyle}>{report.visitorEmail}</td>
                <td style={cellStyle}>{report.roomBooked}</td>
                <td style={cellStyle}>{report.timeIn}</td>
                <td style={cellStyle}>{report.timeOut}</td>
                <td style={cellStyle}>{report.meetingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

// Table styling
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "20px",
  border: "1px solid #ddd",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
};

const removeButtonStyle = {
  backgroundColor: "#FF4C4C",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "5px 10px",
  cursor: "pointer",
};

export default AdminDashboard;

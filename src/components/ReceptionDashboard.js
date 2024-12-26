import React, { useState, useEffect } from "react";

function ReceptionDashboard() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch visitors data from the backend API
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visitors");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVisitors(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching visitors:", error);
        setLoading(false);
        alert("Failed to load visitors. Please try again later.");
      }
    };

    fetchVisitors();
  }, []);

  const markTimeOut = (id) => {
    setVisitors(
      visitors.map((visitor) =>
        visitor._id === id
          ? { ...visitor, timeOut: new Date().toLocaleTimeString() }
          : visitor
      )
    );
  };

  const renderTable = (type, title) => {
    const filteredVisitors = visitors.filter((visitor) => visitor.type === type);

    // Add default data when no visitors are present
    const defaultData = {
      name: "Ram ",
      email: "Rammail@example.com",
      phone: "0000000000",
      timeIn: "N/A",
      timeOut: "N/A",
      employeeToMeet: "N/A",
      meetingPurpose: "N/A",
      numberOfMembers: "0",
    };

    return (
      <div style={{ marginBottom: "30px" }}>
        <h2>{title}</h2>
        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            textAlign: "left",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Time IN</th>
              <th>Time OUT</th>
              {type === "meetingVisitor" && <th>Employee to Meet</th>}
              {type === "meetingVisitor" && <th>Meeting Purpose</th>}
              {type === "meetingAttendee" && <th>Number of Members</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.length > 0 ? (
              filteredVisitors.map((visitor) => (
                <tr key={visitor._id}>
                  <td>{visitor.name}</td>
                  <td>{visitor.email}</td>
                  <td>{visitor.phone}</td>
                  <td>{visitor.timeIn}</td>
                  <td>{visitor.timeOut || "N/A"}</td>
                  {type === "meetingVisitor" && <td>{visitor.employeeToMeet}</td>}
                  {type === "meetingVisitor" && <td>{visitor.meetingPurpose}</td>}
                  {type === "meetingAttendee" && <td>{visitor.numberOfMembers}</td>}
                  <td>
                    {!visitor.timeOut && (
                      <button onClick={() => markTimeOut(visitor._id)}>
                        Mark Time OUT
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={type === "meetingVisitor" ? "8" : type === "meetingAttendee" ? "7" : "6"} style={{ textAlign: "center" }}>
                  No visitors in this category
                </td>
              </tr>
            )}

            {filteredVisitors.length === 0 && (
              <tr>
                <td>{defaultData.name}</td>
                <td>{defaultData.email}</td>
                <td>{defaultData.phone}</td>
                <td>{defaultData.timeIn}</td>
                <td>{defaultData.timeOut}</td>
                {type === "meetingVisitor" && <td>{defaultData.employeeToMeet}</td>}
                {type === "meetingVisitor" && <td>{defaultData.meetingPurpose}</td>}
                {type === "meetingAttendee" && <td>{defaultData.numberOfMembers}</td>}
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Reception Dashboard</h1>
      {renderTable("walkIn", "Walk-In Visitors")}
      {renderTable("meetingVisitor", "Meeting Visitors")}
      {renderTable("meetingAttendee", "Meeting Attendees")}
    </div>
  );
}

export default ReceptionDashboard;

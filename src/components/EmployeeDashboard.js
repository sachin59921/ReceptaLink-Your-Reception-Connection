import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeDashboard() {
  const [visitors, setVisitors] = useState([]);

  // Using mock data for testing purposes
  useEffect(() => {
    const mockVisitors = [
      {
        _id: "1",
        name: "John Doe",
        age: 30,
        department: "HR",
        role: "Manager",
        meetingStatus: "Pending",
        feedback: "",
        timeOut: "",
      },
      {
        _id: "2",
        name: "Jane Smith",
        age: 28,
        department: "Finance",
        role: "Analyst",
        meetingStatus: "Accepted",
        feedback: "",
        timeOut: "3:00 PM",
      },
      {
        _id: "3",
        name: "Mark Johnson",
        age: 35,
        department: "IT",
        role: "Developer",
        meetingStatus: "Completed",
        feedback: "Great meeting, everything was covered!",
        timeOut: "4:00 PM",
      },
    ];

    setVisitors(mockVisitors);
  }, []);

  const acceptMeeting = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/visitors/${id}`, {
        meetingStatus: "Accepted",
      });
      setVisitors(
        visitors.map((visitor) =>
          visitor._id === id
            ? { ...visitor, meetingStatus: "Accepted" }
            : visitor
        )
      );
    } catch (error) {
      console.error("Error updating meeting status:", error);
    }
  };

  const rejectMeeting = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/visitors/${id}`, {
        meetingStatus: "Rejected",
      });
      setVisitors(
        visitors.map((visitor) =>
          visitor._id === id
            ? { ...visitor, meetingStatus: "Rejected" }
            : visitor
        )
      );
    } catch (error) {
      console.error("Error updating meeting status:", error);
    }
  };

  const completeMeeting = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/visitors/${id}`, {
        meetingStatus: "Completed",
        timeOut: new Date().toLocaleTimeString(),
      });
      setVisitors(
        visitors.map((visitor) =>
          visitor._id === id
            ? {
                ...visitor,
                meetingStatus: "Completed",
                timeOut: new Date().toLocaleTimeString(),
              }
            : visitor
        )
      );
    } catch (error) {
      console.error("Error completing meeting:", error);
    }
  };

  const handleFeedback = async (id, feedback) => {
    try {
      await axios.patch(`http://localhost:5000/api/visitors/${id}`, {
        feedback,
      });
      setVisitors(
        visitors.map((visitor) =>
          visitor._id === id ? { ...visitor, feedback } : visitor
        )
      );
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Dashboard</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Role</th>
            <th>Meeting Status</th>
            <th>Feedback</th>
            <th>Time Out</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor._id}>
              <td>{visitor.name}</td>
              <td>{visitor.age || "N/A"}</td>
              <td>{visitor.department || "N/A"}</td>
              <td>{visitor.role || "N/A"}</td>
              <td>{visitor.meetingStatus}</td>
              <td>
                {visitor.meetingStatus === "Completed" ? (
                  <textarea
                    value={visitor.feedback || ""}
                    onChange={(e) => handleFeedback(visitor._id, e.target.value)}
                    placeholder="Leave your feedback here..."
                    rows="2"
                    style={{ width: "100%" }}
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td>{visitor.timeOut || "N/A"}</td>
              <td>
                {visitor.meetingStatus === "Pending" && (
                  <>
                    <button onClick={() => acceptMeeting(visitor._id)}>
                      Accept
                    </button>
                    <button onClick={() => rejectMeeting(visitor._id)}>
                      Reject
                    </button>
                  </>
                )}
                {visitor.meetingStatus === "Accepted" && (
                  <button onClick={() => completeMeeting(visitor._id)}>
                    Complete Meeting
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDashboard;

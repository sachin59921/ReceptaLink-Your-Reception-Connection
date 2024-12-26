import React, { useState } from 'react';

function VisitorRegistration() {
  const [visitorDetails, setVisitorDetails] = useState({
    name: "",
    email: "",
    phone: "",
    visitorType: "walkIn",
    employeeToMeet: "",
    meetingPurpose: "",
    numberOfMembers: "",
    meetDate: "",
    meetingRequirements: {
      projector: false,
      whiteboard: false,
      refreshments: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setVisitorDetails({
        ...visitorDetails,
        meetingRequirements: {
          ...visitorDetails.meetingRequirements,
          [name]: checked,
        },
      });
    } else {
      setVisitorDetails({ ...visitorDetails, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/visitors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorDetails),
      });
  
      if (response.ok) {
        alert('Visitor registered successfully!');
        window.location.href = '/dashboard'; 
      } else {
        const data = await response.json();
        alert(data.message || 'Error registering visitor!');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error registering visitor!');
    }
  };
  
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          padding: "20px",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Visitor Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={visitorDetails.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={visitorDetails.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={visitorDetails.phone}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </label>
          </div>

          {/* Visitor Type Selection */}
          <div style={{ marginBottom: "10px" }}>
            <p>Visitor Type:</p>
            <label>
              <input
                type="radio"
                name="visitorType"
                value="walkIn"
                checked={visitorDetails.visitorType === "walkIn"}
                onChange={handleChange}
              />
              Walk-In Visitor
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="visitorType"
                value="meetingVisitor"
                checked={visitorDetails.visitorType === "meetingVisitor"}
                onChange={handleChange}
              />
              Meeting Visitor
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="visitorType"
                value="meetingAttendee"
                checked={visitorDetails.visitorType === "meetingAttendee"}
                onChange={handleChange}
              />
              Meeting Attendee
            </label>
          </div>

          {/* Conditional Fields for Meeting Visitor */}
          {visitorDetails.visitorType === "meetingVisitor" && (
            <>
              <div style={{ marginBottom: "10px" }}>
                <label>
                  Employee to Meet:
                  <input
                    type="text"
                    name="employeeToMeet"
                    value={visitorDetails.employeeToMeet}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      margin: "5px 0",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </label>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>
                  Purpose of Meeting:
                  <textarea
                    name="meetingPurpose"
                    value={visitorDetails.meetingPurpose}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      margin: "5px 0",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </label>
              </div>
            </>
          )}

          {/* Conditional Fields for Meeting Attendee */}
          {visitorDetails.visitorType === "meetingAttendee" && (
            <>
              <div style={{ marginBottom: "10px" }}>
                <label>
                  Number of Members:
                  <input
                    type="number"
                    name="numberOfMembers"
                    value={visitorDetails.numberOfMembers}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      margin: "5px 0",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </label>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>
                  Meeting Date:
                  <input
                    type="date"
                    name="meetDate"
                    value={visitorDetails.meetDate}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "8px",
                      margin: "5px 0",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </label>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <p>Meeting Requirements:</p>
                <label>
                  <input
                    type="checkbox"
                    name="projector"
                    checked={visitorDetails.meetingRequirements.projector}
                    onChange={handleChange}
                  />
                  Projector
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="whiteboard"
                    checked={visitorDetails.meetingRequirements.whiteboard}
                    onChange={handleChange}
                  />
                  Whiteboard
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="refreshments"
                    checked={visitorDetails.meetingRequirements.refreshments}
                    onChange={handleChange}
                  />
                  Refreshments
                </label>
              </div>
            </>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Register Visitor
          </button>
        </form>
      </div>
    </div>
  );
}

export default VisitorRegistration;

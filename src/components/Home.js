import React from "react";

function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Visitor Management System</h1>
      <p>
        Keep your workforce safe and manage your visitors at any scale with a
        simple yet effective visitor management system
      </p>
      <br />
      <h4>Features and functionality</h4>
      <p>Track and collect information about your office visitors</p>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {/* Card 1 */}
        <div
          className="card"
          style={{
            border: "2px solid",
            width: "250px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h5 className="card-title">Visitor Registration</h5>
          <p className="card-text">
            Add, edit, and delete visitors from your database
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="card"
          style={{
            border: "2px solid",
            width: "250px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h5 className="card-title">Check-In/Check-Out</h5>
          <p className="card-text">
            Track visitor's check-in and check-out times easily
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="card"
          style={{
            border: "2px solid",
            width: "250px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h5 className="card-title">Meeting Scheduling</h5>
          <p className="card-text">
            Schedule and manage visitor meetings with employees
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="card"
          style={{
            border: "2px solid",
            width: "250px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h5 className="card-title">Visitor History</h5>
          <p className="card-text">
            Keep track of past visitors and their activities
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

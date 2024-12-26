import React, { useState } from "react";
import ReceptionDashboard from "./ReceptionDashboard"; 
import EmployeeDashboard from "./EmployeeDashboard"; 
import AdminDashboard from "./AdminDashboard"; 

function Dashboard() {
  const [activeDashboard, setActiveDashboard] = useState("reception");


  const renderContent = () => {
    switch (activeDashboard) {
      case "reception":
        return <ReceptionDashboard />;
      case "employee":
        return <EmployeeDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <p>Select a dashboard to view its content.</p>;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>


      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <button
          style={buttonStyle(activeDashboard === "reception")}
          onClick={() => setActiveDashboard("reception")}
        >
          Reception Dashboard
        </button>
        <button
          style={buttonStyle(activeDashboard === "employee")}
          onClick={() => setActiveDashboard("employee")}
        >
          Employee Dashboard
        </button>
        <button
          style={buttonStyle(activeDashboard === "admin")}
          onClick={() => setActiveDashboard("admin")}
        >
          Admin Dashboard
        </button>
      </div>


      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
        {renderContent()}
      </div>
    </div>
  );
}

const buttonStyle = (isActive) => ({
  padding: "10px 20px",
  margin: "0 10px",
  fontSize: "16px",
  color: isActive ? "#fff" : "#3D3BF3",
  backgroundColor: isActive ? "#3D3BF3" : "#fff",
  border: "2px solid #3D3BF3",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

export default Dashboard;

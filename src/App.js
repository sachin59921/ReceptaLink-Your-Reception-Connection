import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home";
import VisitorRegistration from "./components/VisitorRegistration";
import Dashboard from "./components/Dashboard";

function App() {
  const appStyle = {
    marginTop: "60px",
  };

  return (
    <Router>
      <div>
        <Navbar />

        <div style={appStyle}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/visitor" element={<VisitorRegistration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

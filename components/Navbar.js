import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#3D3BF3",
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "10px 15px",
    border: "2px solid transparent",
    borderRadius: "4px",
    transition: "all 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#0288D1",
    color: "#3D3BF3",
    border: "2px solid #fff",
  };

  return (
    <nav style={navStyle}>
      <Link to="./Home" style={logoStyle}>
        Visitor Manager
      </Link>

      {/* Navigation Links */}
      <div style={linkContainerStyle}>
        <Link
          to="/visitor"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          Add Visitor
        </Link>
        <Link
          to="/dashboard"
          style={linkStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

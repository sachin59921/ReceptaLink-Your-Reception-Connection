import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "1000",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
    animation: "bounce 2s infinite",
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
    position: "relative",
  };

  const linkHoverStyle = {
    color: "#000",
    backgroundColor: "#fff",
    border: "2px solid #fff",
    transform: "scale(1.1)",
    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
  };

  const globalStyles = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    @keyframes glow {
      0% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
      }
      50% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
      }
      100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
      }
    }
  `;

  return (
    <>
      {/* Inject Global Styles */}
      <style>{globalStyles}</style>

      <nav style={navStyle}>
        <Link to="/Home" style={logoStyle}>
          <img
            src="./logo.png"
            alt="logo"
            height={60}
            width={80}
            style={{ marginRight: "10px", borderRadius: "50%" }}
          />
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
    </>
  );
}

export default Navbar;

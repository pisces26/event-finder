import React, { useState } from "react";

const RightSideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {/* Menu Panel */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "250px",
            height: "100vh",
            backgroundColor: "#f8f9fa",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.2)",
            padding: "20px",
            zIndex: "1000",
          }}
        >
          <h3 style={{ margin: "0 0 20px 0", color:"black" }}>Menu</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ margin: "10px 0" }}>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Notifications
              </button>
            </li>
            <li style={{ margin: "10px 0" }}>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Watchlist
              </button>
            </li>
            <li style={{ margin: "10px 0" }}>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Help & Support
              </button>
            </li>
          </ul>
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color:"black",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSideMenu;

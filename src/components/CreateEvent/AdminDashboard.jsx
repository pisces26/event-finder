import React, { useState } from "react";
import AdminLoginForm from "./AdminLoginForm";
import AdminSignupForm from "./AdminSignupForm";
import CreateEventForm from "./CreateEventForm";  // Your existing event form

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    setIsSignup(false); // Switch to event form after signup
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="admin-dashboard">
      {isLoggedIn ? (
        <CreateEventForm /> // Show the event form after login/signup
      ) : isSignup ? (
        <AdminSignupForm onSignupSuccess={handleSignupSuccess} />
      ) : (
        <AdminLoginForm onLoginSuccess={handleLoginSuccess} />
      )}

      {!isLoggedIn && (
        <div>
          <button onClick={toggleSignup}>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
          </button>
        </div>
      )}
    </div>
  );
}

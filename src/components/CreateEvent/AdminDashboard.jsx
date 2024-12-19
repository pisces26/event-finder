// import React, { useState } from "react";
// import AdminLoginForm from "./AdminLogin";
// import AdminSignupForm from "./AdminSignup";
// import CreateEventForm from "./EventForm";

// export default function AdminDashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const [isSignup, setIsSignup] = useState(false);    // Track signup or login view

//   // Handles successful login
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   // Handles successful signup
//   const handleSignupSuccess = () => {
//     setIsLoggedIn(true); // Mark as logged in
//     setIsSignup(false);  // Switch to event creation after signup
//   };

//   // Toggles between login and signup views
//   const toggleSignup = () => {
//     setIsSignup(!isSignup);
//   };

//   return (
//     <div className="admin-dashboard">
//       {/* If logged in, show event form */}
//       {isLoggedIn ? (
//         <CreateEventForm />
//       ) : isSignup ? (
//         // Show signup form if signup state is active
//         <AdminSignupForm onSignupSuccess={handleSignupSuccess} />
//       ) : (
//         // Otherwise, show login form
//         <AdminLoginForm onLoginSuccess={handleLoginSuccess} />
//       )}

//       {/* Toggle between login and signup if not logged in */}
//       {!isLoggedIn && (
//         <div className="text-center mt-4">
//           <button
//             onClick={toggleSignup}
//             className="underline text-blue-500 hover:text-blue-700"
//           >
//             {isSignup
//               ? "Already have an account? Login"
//               : "Don't have an account? Signup"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

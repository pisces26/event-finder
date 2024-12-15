import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSignupForm({ onSignupSuccess }) {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Here you can replace with actual API call
    console.log("Signup successful:", signupData);
    onSignupSuccess();
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
      <h2 className="text-4xl text-center mb-4">Admin Signup</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSignup}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={signupData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="primary" type="submit">Signup</button>
        <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-black" to={'/CreateEvent/AdminLogin'}>Login</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

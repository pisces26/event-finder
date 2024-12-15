import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLoginForm({ onLoginSuccess }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Here you can replace with actual API call
    if (loginData.username === "admin" && loginData.password === "admin123") {
      onLoginSuccess();
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
      <h2 className="text-4xl text-center mb-4">Admin Login</h2>
      <form className="max-w-md mx-auto" onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="primary" type="submit">Login</button>
        <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/CreateEvent/AdminSignup'}>Register now</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

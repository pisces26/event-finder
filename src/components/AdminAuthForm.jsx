import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuth = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Fake authentication logic
    if (formData.email && formData.password) {
      setIsAuthenticated(true);
      navigate("/list-your-event"); // Redirect after login/signup
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Admin Login" : "Admin Signup"}</h2>
      <form onSubmit={handleFormSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="auth-btn">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AdminAuth;

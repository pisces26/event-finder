
import axios from "axios";
import {Link} from "react-router-dom";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLoginForm() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router's navigation hook

  async function handleLogin(ev) {
    ev.preventDefault();
  
    console.log("Sending login request:", { email, password }); // Debug log
  
    axios.post("http://localhost:3001/AdminLogin", { email, password })
      .then(response => {
        console.log("Response:", response.data); // Log the response
        alert("Login successful!");

        navigate ("/CreateEvent/EventForm") // Redirect to the event form
      })
      .catch(error => {
        console.error("Error during login:", error.response?.data || error.message); // Log detailed error
        alert("Login failed. Please check your credentials.");
      });
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Admin Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
          <input type="email"
                placeholder="your@email.com"
                value={email}
                onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
        <button className="primary" type="submit">Login</button>
        <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/CreateEvent/AdminSignup'}>Register now</Link>
        </div>
      </form>
      </div>
    </div>
  );
}

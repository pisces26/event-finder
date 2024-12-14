// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    async function registerUser(ev){
        ev.preventDefault();

        if (!name || !email || !password) {
          alert("All fields are required.");
          return;  // Stop further execution if any field is empty
        }

      axios.post("http://localhost:3000/register", { name, email, password })
      .then(response => {
        console.log("Response:", response.data);
        alert("Registration successful!");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Registration failed.");
      });
    }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
            <input type="text"
                     placeholder="username"
                     value={name}
                     onChange={ev => setName(ev.target.value)}/>
          <input type="email"
                placeholder="your@email.com"
                value={email}
                onChange={ev => setEmail(ev.target.value)}/>
          <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>

  );

}
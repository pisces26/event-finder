import React from "react";

import './App.css';
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Plays from "./components/category/Plays";
import EventForm from "./components/CreateEvent/EventForm";
import Layout from "./Layout";
import AdminSignupForm from "./components/CreateEvent/AdminSignup";
import AdminLoginForm from "./components/CreateEvent/AdminLogin";


const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout/>} >
      <Route index element={<IndexPage/>} />

      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />

      <Route path="/category/:Plays" element={<Plays />} />
      <Route path="/CreateEvent/EventForm" element={<EventForm />} />

      <Route path="/CreateEvent/AdminSignup" element={<AdminSignupForm />} />
      <Route path="/CreateEvent/AdminLogin" element={<AdminLoginForm />} />
    </Route>

    </Routes>
  );
};

export default App;

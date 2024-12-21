import React from "react";

import './App.css';
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import Layout from "./Layout.jsx";
import EventForm from "./components/CreateEvent/EventForm.jsx";
import AdminSignupForm from "./components/CreateEvent/AdminSignup.jsx";
import AdminLoginForm from "./components/CreateEvent/AdminLogin.jsx";
import Plays from "./components/category/Plays.jsx";
import Concerts from "./components/category/Concerts.jsx";
import Standup from "./components/category/Standup.jsx";
import Workshops from "./components/category/Workshops.jsx";
import Activities from "./components/category/Activities.jsx";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout/>} >
      <Route index element={<IndexPage/>} />

      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />

      <Route path="/category/Plays" element={<Plays />} />

      <Route path="/category/Concerts" element={<Concerts />} />

      <Route path="/category/Standup" element={<Standup />} />

      <Route path="/category/Workshops" element={<Workshops />} />

      <Route path="/category/Activities" element={<Activities />} />

      <Route path="/CreateEvent/EventForm" element={<EventForm />} />

      <Route path="/CreateEvent/AdminSignup" element={<AdminSignupForm />} />
      <Route path="/CreateEvent/AdminLogin" element={<AdminLoginForm />} />

    </Route>

    </Routes>
  );
};

export default App;

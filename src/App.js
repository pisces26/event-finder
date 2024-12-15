import React from "react";

import './App.css';
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import Layout from "./Layout.jsx";


const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout/>} >
      <Route index element={<IndexPage/>} />

      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Route>
    </Routes>
  );
};

export default App;

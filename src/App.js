import React from "react";

import './App.css';
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Layout from "./Layout";


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
